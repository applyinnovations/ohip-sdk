# ActivityAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityAttachmentList** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewActivityAttachments

`func NewActivityAttachments() *ActivityAttachments`

NewActivityAttachments instantiates a new ActivityAttachments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityAttachmentsWithDefaults

`func NewActivityAttachmentsWithDefaults() *ActivityAttachments`

NewActivityAttachmentsWithDefaults instantiates a new ActivityAttachments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityAttachmentList

`func (o *ActivityAttachments) GetActivityAttachmentList() []AttachmentType`

GetActivityAttachmentList returns the ActivityAttachmentList field if non-nil, zero value otherwise.

### GetActivityAttachmentListOk

`func (o *ActivityAttachments) GetActivityAttachmentListOk() (*[]AttachmentType, bool)`

GetActivityAttachmentListOk returns a tuple with the ActivityAttachmentList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityAttachmentList

`func (o *ActivityAttachments) SetActivityAttachmentList(v []AttachmentType)`

SetActivityAttachmentList sets ActivityAttachmentList field to given value.

### HasActivityAttachmentList

`func (o *ActivityAttachments) HasActivityAttachmentList() bool`

HasActivityAttachmentList returns a boolean if a field has been set.

### GetLinks

`func (o *ActivityAttachments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ActivityAttachments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ActivityAttachments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ActivityAttachments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ActivityAttachments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ActivityAttachments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ActivityAttachments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ActivityAttachments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


