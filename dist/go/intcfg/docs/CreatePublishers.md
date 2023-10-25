# CreatePublishers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Publishers** | Pointer to [**[]ExternalSystemType**](ExternalSystemType.md) | Information of all the publishers for a given subscriber. | [optional] 
**Subscriber** | Pointer to [**ExternalSystemType**](ExternalSystemType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreatePublishers

`func NewCreatePublishers() *CreatePublishers`

NewCreatePublishers instantiates a new CreatePublishers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreatePublishersWithDefaults

`func NewCreatePublishersWithDefaults() *CreatePublishers`

NewCreatePublishersWithDefaults instantiates a new CreatePublishers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *CreatePublishers) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreatePublishers) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreatePublishers) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreatePublishers) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPublishers

`func (o *CreatePublishers) GetPublishers() []ExternalSystemType`

GetPublishers returns the Publishers field if non-nil, zero value otherwise.

### GetPublishersOk

`func (o *CreatePublishers) GetPublishersOk() (*[]ExternalSystemType, bool)`

GetPublishersOk returns a tuple with the Publishers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishers

`func (o *CreatePublishers) SetPublishers(v []ExternalSystemType)`

SetPublishers sets Publishers field to given value.

### HasPublishers

`func (o *CreatePublishers) HasPublishers() bool`

HasPublishers returns a boolean if a field has been set.

### GetSubscriber

`func (o *CreatePublishers) GetSubscriber() ExternalSystemType`

GetSubscriber returns the Subscriber field if non-nil, zero value otherwise.

### GetSubscriberOk

`func (o *CreatePublishers) GetSubscriberOk() (*ExternalSystemType, bool)`

GetSubscriberOk returns a tuple with the Subscriber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriber

`func (o *CreatePublishers) SetSubscriber(v ExternalSystemType)`

SetSubscriber sets Subscriber field to given value.

### HasSubscriber

`func (o *CreatePublishers) HasSubscriber() bool`

HasSubscriber returns a boolean if a field has been set.

### GetWarnings

`func (o *CreatePublishers) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreatePublishers) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreatePublishers) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreatePublishers) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


