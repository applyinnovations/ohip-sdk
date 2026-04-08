# BlockAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockAttachments** | Pointer to [**[]AttachmentType**](AttachmentType.md) | Attachment List. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBlockAttachments

`func NewBlockAttachments() *BlockAttachments`

NewBlockAttachments instantiates a new BlockAttachments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockAttachmentsWithDefaults

`func NewBlockAttachmentsWithDefaults() *BlockAttachments`

NewBlockAttachmentsWithDefaults instantiates a new BlockAttachments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockAttachments

`func (o *BlockAttachments) GetBlockAttachments() []AttachmentType`

GetBlockAttachments returns the BlockAttachments field if non-nil, zero value otherwise.

### GetBlockAttachmentsOk

`func (o *BlockAttachments) GetBlockAttachmentsOk() (*[]AttachmentType, bool)`

GetBlockAttachmentsOk returns a tuple with the BlockAttachments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockAttachments

`func (o *BlockAttachments) SetBlockAttachments(v []AttachmentType)`

SetBlockAttachments sets BlockAttachments field to given value.

### HasBlockAttachments

`func (o *BlockAttachments) HasBlockAttachments() bool`

HasBlockAttachments returns a boolean if a field has been set.

### GetLinks

`func (o *BlockAttachments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BlockAttachments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BlockAttachments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BlockAttachments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BlockAttachments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BlockAttachments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BlockAttachments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BlockAttachments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


