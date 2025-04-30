# FileAttachmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachmentId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**FileAttachment** | Pointer to **string** | File attachment in base64 binary format | [optional] 
**FileName** | Pointer to **string** | Name of the attachment | [optional] 

## Methods

### NewFileAttachmentType

`func NewFileAttachmentType() *FileAttachmentType`

NewFileAttachmentType instantiates a new FileAttachmentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFileAttachmentTypeWithDefaults

`func NewFileAttachmentTypeWithDefaults() *FileAttachmentType`

NewFileAttachmentTypeWithDefaults instantiates a new FileAttachmentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttachmentId

`func (o *FileAttachmentType) GetAttachmentId() UniqueIDType`

GetAttachmentId returns the AttachmentId field if non-nil, zero value otherwise.

### GetAttachmentIdOk

`func (o *FileAttachmentType) GetAttachmentIdOk() (*UniqueIDType, bool)`

GetAttachmentIdOk returns a tuple with the AttachmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachmentId

`func (o *FileAttachmentType) SetAttachmentId(v UniqueIDType)`

SetAttachmentId sets AttachmentId field to given value.

### HasAttachmentId

`func (o *FileAttachmentType) HasAttachmentId() bool`

HasAttachmentId returns a boolean if a field has been set.

### GetFileAttachment

`func (o *FileAttachmentType) GetFileAttachment() string`

GetFileAttachment returns the FileAttachment field if non-nil, zero value otherwise.

### GetFileAttachmentOk

`func (o *FileAttachmentType) GetFileAttachmentOk() (*string, bool)`

GetFileAttachmentOk returns a tuple with the FileAttachment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileAttachment

`func (o *FileAttachmentType) SetFileAttachment(v string)`

SetFileAttachment sets FileAttachment field to given value.

### HasFileAttachment

`func (o *FileAttachmentType) HasFileAttachment() bool`

HasFileAttachment returns a boolean if a field has been set.

### GetFileName

`func (o *FileAttachmentType) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *FileAttachmentType) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *FileAttachmentType) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *FileAttachmentType) HasFileName() bool`

HasFileName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


