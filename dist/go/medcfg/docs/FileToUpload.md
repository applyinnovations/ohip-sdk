# FileToUpload

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

### NewFileToUpload

`func NewFileToUpload() *FileToUpload`

NewFileToUpload instantiates a new FileToUpload object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFileToUploadWithDefaults

`func NewFileToUploadWithDefaults() *FileToUpload`

NewFileToUploadWithDefaults instantiates a new FileToUpload object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinkId

`func (o *FileToUpload) GetLinkId() string`

GetLinkId returns the LinkId field if non-nil, zero value otherwise.

### GetLinkIdOk

`func (o *FileToUpload) GetLinkIdOk() (*string, bool)`

GetLinkIdOk returns a tuple with the LinkId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkId

`func (o *FileToUpload) SetLinkId(v string)`

SetLinkId sets LinkId field to given value.

### HasLinkId

`func (o *FileToUpload) HasLinkId() bool`

HasLinkId returns a boolean if a field has been set.

### GetLinkType

`func (o *FileToUpload) GetLinkType() string`

GetLinkType returns the LinkType field if non-nil, zero value otherwise.

### GetLinkTypeOk

`func (o *FileToUpload) GetLinkTypeOk() (*string, bool)`

GetLinkTypeOk returns a tuple with the LinkType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinkType

`func (o *FileToUpload) SetLinkType(v string)`

SetLinkType sets LinkType field to given value.

### HasLinkType

`func (o *FileToUpload) HasLinkType() bool`

HasLinkType returns a boolean if a field has been set.

### GetFileName

`func (o *FileToUpload) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *FileToUpload) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *FileToUpload) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *FileToUpload) HasFileName() bool`

HasFileName returns a boolean if a field has been set.

### GetDescription

`func (o *FileToUpload) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *FileToUpload) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *FileToUpload) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *FileToUpload) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUserName

`func (o *FileToUpload) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *FileToUpload) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *FileToUpload) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *FileToUpload) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### GetHotelId

`func (o *FileToUpload) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FileToUpload) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FileToUpload) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FileToUpload) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetGlobalYN

`func (o *FileToUpload) GetGlobalYN() string`

GetGlobalYN returns the GlobalYN field if non-nil, zero value otherwise.

### GetGlobalYNOk

`func (o *FileToUpload) GetGlobalYNOk() (*string, bool)`

GetGlobalYNOk returns a tuple with the GlobalYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobalYN

`func (o *FileToUpload) SetGlobalYN(v string)`

SetGlobalYN sets GlobalYN field to given value.

### HasGlobalYN

`func (o *FileToUpload) HasGlobalYN() bool`

HasGlobalYN returns a boolean if a field has been set.

### GetFileAttachment

`func (o *FileToUpload) GetFileAttachment() string`

GetFileAttachment returns the FileAttachment field if non-nil, zero value otherwise.

### GetFileAttachmentOk

`func (o *FileToUpload) GetFileAttachmentOk() (*string, bool)`

GetFileAttachmentOk returns a tuple with the FileAttachment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileAttachment

`func (o *FileToUpload) SetFileAttachment(v string)`

SetFileAttachment sets FileAttachment field to given value.

### HasFileAttachment

`func (o *FileToUpload) HasFileAttachment() bool`

HasFileAttachment returns a boolean if a field has been set.

### GetOverwriteExistingFileYN

`func (o *FileToUpload) GetOverwriteExistingFileYN() string`

GetOverwriteExistingFileYN returns the OverwriteExistingFileYN field if non-nil, zero value otherwise.

### GetOverwriteExistingFileYNOk

`func (o *FileToUpload) GetOverwriteExistingFileYNOk() (*string, bool)`

GetOverwriteExistingFileYNOk returns a tuple with the OverwriteExistingFileYN field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverwriteExistingFileYN

`func (o *FileToUpload) SetOverwriteExistingFileYN(v string)`

SetOverwriteExistingFileYN sets OverwriteExistingFileYN field to given value.

### HasOverwriteExistingFileYN

`func (o *FileToUpload) HasOverwriteExistingFileYN() bool`

HasOverwriteExistingFileYN returns a boolean if a field has been set.

### GetLinks

`func (o *FileToUpload) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FileToUpload) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FileToUpload) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FileToUpload) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FileToUpload) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FileToUpload) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FileToUpload) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FileToUpload) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


