# ProfileAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileAttachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewProfileAttachments

`func NewProfileAttachments() *ProfileAttachments`

NewProfileAttachments instantiates a new ProfileAttachments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileAttachmentsWithDefaults

`func NewProfileAttachmentsWithDefaults() *ProfileAttachments`

NewProfileAttachmentsWithDefaults instantiates a new ProfileAttachments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileAttachments

`func (o *ProfileAttachments) GetProfileAttachments() []AttachmentType`

GetProfileAttachments returns the ProfileAttachments field if non-nil, zero value otherwise.

### GetProfileAttachmentsOk

`func (o *ProfileAttachments) GetProfileAttachmentsOk() (*[]AttachmentType, bool)`

GetProfileAttachmentsOk returns a tuple with the ProfileAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAttachments

`func (o *ProfileAttachments) SetProfileAttachments(v []AttachmentType)`

SetProfileAttachments sets ProfileAttachments field to given value.

### HasProfileAttachments

`func (o *ProfileAttachments) HasProfileAttachments() bool`

HasProfileAttachments returns a boolean if a field has been set.

### GetLinks

`func (o *ProfileAttachments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProfileAttachments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProfileAttachments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProfileAttachments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ProfileAttachments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProfileAttachments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProfileAttachments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProfileAttachments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


