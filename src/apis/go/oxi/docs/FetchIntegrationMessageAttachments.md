# FetchIntegrationMessageAttachments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to [**IntegrationMessageAttachmentsType**](IntegrationMessageAttachmentsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFetchIntegrationMessageAttachments

`func NewFetchIntegrationMessageAttachments() *FetchIntegrationMessageAttachments`

NewFetchIntegrationMessageAttachments instantiates a new FetchIntegrationMessageAttachments object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchIntegrationMessageAttachmentsWithDefaults

`func NewFetchIntegrationMessageAttachmentsWithDefaults() *FetchIntegrationMessageAttachments`

NewFetchIntegrationMessageAttachmentsWithDefaults instantiates a new FetchIntegrationMessageAttachments object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *FetchIntegrationMessageAttachments) GetMessage() IntegrationMessageAttachmentsType`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *FetchIntegrationMessageAttachments) GetMessageOk() (*IntegrationMessageAttachmentsType, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *FetchIntegrationMessageAttachments) SetMessage(v IntegrationMessageAttachmentsType)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *FetchIntegrationMessageAttachments) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetLinks

`func (o *FetchIntegrationMessageAttachments) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FetchIntegrationMessageAttachments) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FetchIntegrationMessageAttachments) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FetchIntegrationMessageAttachments) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FetchIntegrationMessageAttachments) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FetchIntegrationMessageAttachments) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FetchIntegrationMessageAttachments) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FetchIntegrationMessageAttachments) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


