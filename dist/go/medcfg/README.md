# Go API client for medcfg

Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 23.2
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientCodegen

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/net/context
```

Put the package under your project folder and add the following in import:

```golang
import medcfg "github.com/applyinnovations/ohip-sdk/medcfg"
```

To use a proxy, set the environment variable `HTTP_PROXY`:

```golang
os.Setenv("HTTP_PROXY", "http://proxy_name:proxy_port")
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `medcfg.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), medcfg.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `medcfg.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), medcfg.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identified by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `medcfg.ContextOperationServerIndices` and `medcfg.ContextOperationServerVariables` context maps.

```golang
ctx := context.WithValue(context.Background(), medcfg.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), medcfg.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to */med/config/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OperaContentAPI* | [**EmailFolioReport**](docs/OperaContentAPI.md#emailfolioreport) | **Post** /folioReports/email | Email folio report
*OperaContentAPI* | [**GetCustomizedLetter**](docs/OperaContentAPI.md#getcustomizedletter) | **Get** /customizedLetter/{letterId} | Get customized letter
*OperaContentAPI* | [**GetEmailFile**](docs/OperaContentAPI.md#getemailfile) | **Get** /emailFile/{emailId} | Get Email Blob File
*OperaContentAPI* | [**GetFileAttachment**](docs/OperaContentAPI.md#getfileattachment) | **Get** /fileAttachments | Get file attachment
*OperaContentAPI* | [**GetFolioReport**](docs/OperaContentAPI.md#getfolioreport) | **Get** /hotels/{hotelId}/reservations/{reservationId}/folioReports | Get folio report
*OperaContentAPI* | [**GetImage**](docs/OperaContentAPI.md#getimage) | **Get** /images | Get image
*OperaContentAPI* | [**GetRegistrationCard**](docs/OperaContentAPI.md#getregistrationcard) | **Get** /hotels/{hotelId}/reservations/{reservationId}/registrationCard | Get registration card
*OperaContentAPI* | [**RemoveImage**](docs/OperaContentAPI.md#removeimage) | **Delete** /images | Use this API to Delete image
*OperaContentAPI* | [**SetCustomizedLetter**](docs/OperaContentAPI.md#setcustomizedletter) | **Put** /hotels/{hotelId}/reservations/{reservationId}/customizedLetter | Set customized letter
*OperaContentAPI* | [**UploadFileAttachment**](docs/OperaContentAPI.md#uploadfileattachment) | **Post** /fileAttachments | Upload a file attachment
*OperaContentAPI* | [**UploadImage**](docs/OperaContentAPI.md#uploadimage) | **Post** /images | Use this API to Upload an image


## Documentation For Models

 - [CustomizedLetter](docs/CustomizedLetter.md)
 - [CustomizedLetterStatus](docs/CustomizedLetterStatus.md)
 - [CustomizedLetterType](docs/CustomizedLetterType.md)
 - [EmailFile](docs/EmailFile.md)
 - [EmailFileType](docs/EmailFileType.md)
 - [EmailRecipientType](docs/EmailRecipientType.md)
 - [ErrorInstance](docs/ErrorInstance.md)
 - [ExceptionDetailType](docs/ExceptionDetailType.md)
 - [File](docs/File.md)
 - [FileAttachmentType](docs/FileAttachmentType.md)
 - [FileToUpload](docs/FileToUpload.md)
 - [FolioReport](docs/FolioReport.md)
 - [FolioReportCriteriaType](docs/FolioReportCriteriaType.md)
 - [FolioReportResultType](docs/FolioReportResultType.md)
 - [FolioReportToEmail](docs/FolioReportToEmail.md)
 - [Image](docs/Image.md)
 - [ImageCodeType](docs/ImageCodeType.md)
 - [ImageParameterType](docs/ImageParameterType.md)
 - [ImageResultType](docs/ImageResultType.md)
 - [ImageStyleType](docs/ImageStyleType.md)
 - [ImageToUpload](docs/ImageToUpload.md)
 - [ImageUploadType](docs/ImageUploadType.md)
 - [InstanceLink](docs/InstanceLink.md)
 - [RegistrationCard](docs/RegistrationCard.md)
 - [RegistrationCardType](docs/RegistrationCardType.md)
 - [Status](docs/Status.md)
 - [UniqueIDType](docs/UniqueIDType.md)
 - [WarningType](docs/WarningType.md)


## Documentation For Authorization

Endpoints do not require authorization.


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author

hospitality-integrations_ww@oracle.com
