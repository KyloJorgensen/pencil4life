'use strict';

import * as React from 'react';
import './dropzone.less';

export interface DropzoneProps {
	multiple?: boolean;
	fileTypes: string[];
	handleChange?: (vaildFiles: File[]) => void;
}

export interface DropzoneState {
	over: boolean,
	vaildFiles: File[],
	badFiles: string[],
}

export interface DropzoneMethods {
	onFilesSelected: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleDragOver: (event: UIEvent) => void;
	handleDragEnter: (event: UIEvent) => void;
	handleDragLeave: (event: UIEvent) => void;
	handleDrop: (event: UIEvent) => void;
	handleFiles: (_files: FileList) => void;
	clearBadFile: (event: UIEvent) => void;
	validateFileType: (event: UIEvent) => void;
	clearAllBadFiles: (event: UIEvent) => void;
}

class Dropzone extends React.Component<DropzoneProps, DropzoneState> implements DropzoneMethods {
	public static defaultProps = {
		multiple: false,
	};
    constructor(props) {
        super(props);
        this.state = {
        	over: false,
        	vaildFiles: [],
			badFiles: [],
  		};

		this.onFilesSelected = this.onFilesSelected.bind(this);
		this.handleDragOver = this.handleDragOver.bind(this);
		this.handleDragEnter = this.handleDragEnter.bind(this);
		this.handleDragLeave = this.handleDragLeave.bind(this);
		this.handleDrop = this.handleDrop.bind(this);
		this.handleFiles = this.handleFiles.bind(this);
		this.clearBadFile = this.clearBadFile.bind(this);
		this.validateFileType = this.validateFileType.bind(this);
		this.clearAllBadFiles = this.clearAllBadFiles.bind(this);
	}
	
	onFilesSelected(event: React.ChangeEvent<HTMLInputElement>) {
	    event.preventDefault();
		this.handleFiles(event.target.files);
		event.target.value = '';
	}

	handleDragOver(event) {
	    event.preventDefault()
	}

	handleDragEnter(event) {
	    this.setState({ over: true })
	}

	handleDragLeave(event) {
	    this.setState({ over: false })
	}

	handleDrop(event) {
	    event.preventDefault();
	    this.handleFiles(event.dataTransfer.files);
		event.target.value = '';
	}

	handleFiles(_files: FileList) {
		const { validateFileType } = this;
		const multiple = this.props.multiple;
		const files = Object.values(_files);

		this.setState(() => {
			return {
				badFiles: [], 
				vaildFiles: []
			};
		});

		const vaildFiles = [];
		files.forEach((file) => {
			if (validateFileType(file)) {
				if (!!multiple) {
					vaildFiles.push(file);
				} else {
					if (vaildFiles.length == 0) {
						vaildFiles.push(file);
					} else {
						const _state = this.state;
						_state.badFiles.push(file.name + " -- Only One File");
						this.setState(_state);
					}
				}
			}
		});
		this.setState(() => {
			console.log(vaildFiles)
			return {
				vaildFiles: vaildFiles,
			};
		});
		if ('handleChange' in this.props) {
			this.props.handleChange(vaildFiles);
		}
	}

	validateFileType(file) {
		let fileTypes = [];
		if ('fileTypes' in this.props) {
			if (Array.isArray(fileTypes)) {
				fileTypes = this.props.fileTypes;
			}
		}

        if (fileTypes.includes(file.type)) {
			return true;
        } else {
        	const _state = this.state;
        	_state.badFiles.push(file.name + ' -- Invaild Type');
        	this.setState(_state);
        }
        return false;
	}

    clearAllBadFiles() {
		this.setState(() => {
			return {badFiles: []};
		});
    }

    clearBadFile(index) {
		this.setState((preState) => {
			preState.badFiles.splice(index, 1);
			return preState;
		});   	
    }

	render() {
		const badFiles = [];
		const { clearBadFile } = this;
		this.state.badFiles.forEach(function(badFile, index, array){
			const _clearBadFile = function() {
				clearBadFile(index);
			};
			badFiles.push(
				<li className="bad-file-wrapper" key={index} >
					<p>Bad File: {badFile}</p>
					<button onClick={_clearBadFile} >X</button>
				</li>
			);
		});

		return (
			<div className="dropzone-wrapper">
				<div className="dropzone">
					<div className="bad-file-display">
						{badFiles.length > 1 ? <button onClick={this.clearAllBadFiles} >Clear all bad files</button> : ''}
						<ul className="bad-files-wrapper" >{badFiles}</ul>
					</div>
					<div className="custom-dropzone">
					    <input type="file" multiple className="custom-dropzone-input dropzone" onChange={this.onFilesSelected} onDrop={this.handleDrop} onDragOver={this.handleDragOver} onDragLeave={this.handleDragLeave} onDragEnter={this.handleDragEnter} />
					   	<label className="custom-dropzone-label">{this.props.children ? this.props.children : <p>Drop Files or Click to Browse</p>}</label>
					</div>
				</div>
			</div>
		);
	}
};

export default Dropzone;