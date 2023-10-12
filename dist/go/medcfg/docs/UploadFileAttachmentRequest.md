# UploadFileAttachmentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LinkId** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**LinkType** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**FileName** | Pointer to **string** | Used for Character Strings, length 0 to 1000. | [optional] 
**Description** | Pointer to **string** | Used for Character Strings, length 0 to 2000. | [optional] 
**UserName** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**HotelId** | Pointer to **string** | Used for Character Strings, length 0 to 200. | [optional] 
**GlobalYN** | Pointer to **string** | Used for Character Strings, length 0 to 10. | [optional] 
**FileAttachment** | Pointer to **string** | Attachment file in base64 binary format. | [optional] 
**OverwriteExistingFileYN** | Pointer to **string** | Used for Character Strings, length 0 to 10. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewUploadFileAttachmentRequest

`func NewUploadFileAttachmentRequest() *UploadFileAttachmentRequest`

NewUploadFileAttachmentRequest instantiates a new UploadFileAttachmentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUploadFileAttachmentRequestWithDefaults

`func NewUploadFileAttachmentRequestWithDefaults() *UploadFileAttachmentRequest`

NewUploadFileAttachmentRequestWithDefaults instantiates a new UploadFileAttachmentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkId

`func (o *UploadFileAttachmentRequest) GetLinkId() string`

GetLinkId returns the LinkId field if non-nil, zero value otherwise.

### GetLinkIdOk

`func (o *UploadFileAttachmentRequest) GetLinkIdOk() (*string, bool)`

GetLinkIdOk returns a tuple with the LinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkId

`func (o *UploadFileAttachmentRequest) SetLinkId(v string)`

SetLinkId sets LinkId field to given value.

### HasLinkId

`func (o *UploadFileAttachmentRequest) HasLinkId() bool`

HasLinkId returns a boolean if a field has been set.

### GetLinkType

`func (o *UploadFileAttachmentRequest) GetLinkType() string`

GetLinkType returns the LinkType field if non-nil, zero value otherwise.

### GetLinkTypeOk

`func (o *UploadFileAttachmentRequest) GetLinkTypeOk() (*string, bool)`

GetLinkTypeOk returns a tuple with the LinkType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkType

`func (o *UploadFileAttachmentRequest) SetLinkType(v string)`

SetLinkType sets LinkType field to given value.

### HasLinkType

`func (o *UploadFileAttachmentRequest) HasLinkType() bool`

HasLinkType returns a boolean if a field has been set.

### GetFileName

`func (o *UploadFileAttachmentRequest) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *UploadFileAttachmentRequest) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *UploadFileAttachmentRequest) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *UploadFileAttachmentRequest) HasFileName() bool`

HasFileName returns a boolean if a field has been set.

### GetDescription

`func (o *UploadFileAttachmentRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UploadFileAttachmentRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UploadFileAttachmentRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *UploadFileAttachmentRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUserName

`func (o *UploadFileAttachmentRequest) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *UploadFileAttachmentRequest) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *UploadFileAttachmentRequest) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *UploadFileAttachmentRequest) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetHotelId

`func (o *UploadFileAttachmentRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *UploadFileAttachmentRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *UploadFileAttachmentRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *UploadFileAttachmentRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetGlobalYN

`func (o *UploadFileAttachmentRequest) GetGlobalYN() string`

GetGlobalYN returns the GlobalYN field if non-nil, zero value otherwise.

### GetGlobalYNOk

`func (o *UploadFileAttachmentRequest) GetGlobalYNOk() (*string, bool)`

GetGlobalYNOk returns a tuple with the GlobalYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalYN

`func (o *UploadFileAttachmentRequest) SetGlobalYN(v string)`

SetGlobalYN sets GlobalYN field to given value.

### HasGlobalYN

`func (o *UploadFileAttachmentRequest) HasGlobalYN() bool`

HasGlobalYN returns a boolean if a field has been set.

### GetFileAttachment

`func (o *UploadFileAttachmentRequest) GetFileAttachment() string`

GetFileAttachment returns the FileAttachment field if non-nil, zero value otherwise.

### GetFileAttachmentOk

`func (o *UploadFileAttachmentRequest) GetFileAttachmentOk() (*string, bool)`

GetFileAttachmentOk returns a tuple with the FileAttachment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileAttachment

`func (o *UploadFileAttachmentRequest) SetFileAttachment(v string)`

SetFileAttachment sets FileAttachment field to given value.

### HasFileAttachment

`func (o *UploadFileAttachmentRequest) HasFileAttachment() bool`

HasFileAttachment returns a boolean if a field has been set.

### GetOverwriteExistingFileYN

`func (o *UploadFileAttachmentRequest) GetOverwriteExistingFileYN() string`

GetOverwriteExistingFileYN returns the OverwriteExistingFileYN field if non-nil, zero value otherwise.

### GetOverwriteExistingFileYNOk

`func (o *UploadFileAttachmentRequest) GetOverwriteExistingFileYNOk() (*string, bool)`

GetOverwriteExistingFileYNOk returns a tuple with the OverwriteExistingFileYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverwriteExistingFileYN

`func (o *UploadFileAttachmentRequest) SetOverwriteExistingFileYN(v string)`

SetOverwriteExistingFileYN sets OverwriteExistingFileYN field to given value.

### HasOverwriteExistingFileYN

`func (o *UploadFileAttachmentRequest) HasOverwriteExistingFileYN() bool`

HasOverwriteExistingFileYN returns a boolean if a field has been set.

### GetLinks

`func (o *UploadFileAttachmentRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *UploadFileAttachmentRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *UploadFileAttachmentRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *UploadFileAttachmentRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *UploadFileAttachmentRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *UploadFileAttachmentRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *UploadFileAttachmentRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *UploadFileAttachmentRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


