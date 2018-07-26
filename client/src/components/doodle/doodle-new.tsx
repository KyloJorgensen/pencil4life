'use strict';

import * as React from 'react';
import RichTextEditor from 'react-rte';
import { Redirect, Link } from 'react-router-dom';
import ImageNew from '../image/image-new';
import ImageEdit from '../image/image-edit';
import { IUserContext, userConsumer } from '../user/user-provider';
import { Location } from 'history';
import { doodleConsumer, IDoodleContext, addDoodleParams } from './doodle-provider';
import { Popout } from '../utilities/styled.components';

export interface DoodleNewProps {
	user: IUserContext;
	doodle: IDoodleContext;
	location: Location;
}

export interface DoodleNewState {
	_doodleId: string;
	required: boolean;
	imageRequired: boolean;
	title: string;
	details: any;
	_imageId?: string;
}

export interface DoodleNewMethods {
	hitKey: (event: UIEvent) => void;
	addNewDoodle: (event: UIEvent) => void;
	addNewDoodleResult: (error: boolean, _doodleId: string) => void;
	onRichTextChange: (value: string) => void;
	addNewImageResult: (error: boolean, _imageId: string) => void;
}


class DoodleNew extends React.Component<DoodleNewProps, DoodleNewState> implements DoodleNewMethods {
    constructor(props) {
        super(props);
        this.state = {
        	_doodleId: null,
        	required: false,
        	imageRequired: false,
			title: null,
        	details: RichTextEditor.createEmptyValue(),
		};
		

		this.hitKey = this.hitKey.bind(this);
		this.addNewDoodle = this.addNewDoodle.bind(this);
		this.addNewDoodleResult = this.addNewDoodleResult.bind(this);
		this.onRichTextChange = this.onRichTextChange.bind(this);
		this.addNewImageResult = this.addNewImageResult.bind(this);
	}

	hitKey(event) {
		if (event.key == 'Enter') {
			this.addNewDoodle(event);
		}
	}

	titleRef: React.RefObject<HTMLInputElement> = React.createRef();

	addNewDoodle(event) {
		event.preventDefault();
		const title = this.titleRef.current.value;
		const { details, _imageId } = this.state;

		const newDoodle: addDoodleParams = {
			title: title,
			details: details.toString('html'),
		}

		if (_imageId != null) {
			newDoodle._imageId = _imageId;
		}
		this.props.doodle.addDoodle(newDoodle, this.addNewDoodleResult);

		this.setState(() => {
			return {required: false};
		});
	}

	addNewDoodleResult = (error, _doodleId) => {
		if (error) {
			this.setState(() => {
				return {required: true};
			});
		} else {
			this.setState(() => {
				return {_doodleId: _doodleId};
			});
		} 
	}

	onRichTextChange = (value) => {
		this.setState(() => {
			return {details: value};
		});
	}

	addNewImageResult = (error, _imageId) => {
		if (error) {
			this.setState(() => {
				return {imageRequired: true};
			});
		} else {
			this.setState(() => {
				return {
					_imageId: _imageId,
					imageRequired: false,
				};
			});
		} 
	}
	
	render() {
		const { addNewImageResult, addNewDoodle, hitKey, onRichTextChange, titleRef } = this;
		const { _imageId, imageRequired, _doodleId, required, details } = this.state;
		const { admin } = this.props.user;
		const { pathname } = this.props.location;
		const { total } = this.props.doodle;

		

		if (_doodleId) {
			return (<Redirect to={'/doodle/item/'+this.state._doodleId} />);
		}
		if (!admin) {
			return (<Redirect to={{pathname: '/login', state: {redirectPath: pathname}}}/>)
		}
	
		return (
			<Popout>
				<div className="doodle-new-wrapper" >
					<p className="text-right" ><Link to={'/doodle/'}>X</Link></p>
					<h3>New Doodle</h3>
					<label>Image</label>
					{_imageId ? <ImageEdit _imageId={_imageId} updateRedirect={false} /> : <ImageNew required={imageRequired} addNewImageResult={addNewImageResult} />}
					<label>Title{required ? (<span className="errortext" >*</span>) : ''}</label>
					<br/>
					<input type='text' onKeyPress={hitKey} placeholder="Great Doodle" ref={titleRef} />
					<br/>
					<label>Details</label>
					<br/>
					<RichTextEditor value={details} onChange={onRichTextChange} />
					<br/>
					<input type='submit' onClick={addNewDoodle} value='SAVE' />
				</div>
			</Popout>
		);			
	}
};

export default userConsumer(doodleConsumer(DoodleNew));