# PostPublishersRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Publishers** | Pointer to [**[]ExternalSystemType**](ExternalSystemType.md) | Information of all the publishers for a given subscriber. | [optional] 
**Subscriber** | Pointer to [**ExternalSystemType**](ExternalSystemType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostPublishersRequest

`func NewPostPublishersRequest() *PostPublishersRequest`

NewPostPublishersRequest instantiates a new PostPublishersRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostPublishersRequestWithDefaults

`func NewPostPublishersRequestWithDefaults() *PostPublishersRequest`

NewPostPublishersRequestWithDefaults instantiates a new PostPublishersRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostPublishersRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostPublishersRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostPublishersRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostPublishersRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPublishers

`func (o *PostPublishersRequest) GetPublishers() []ExternalSystemType`

GetPublishers returns the Publishers field if non-nil, zero value otherwise.

### GetPublishersOk

`func (o *PostPublishersRequest) GetPublishersOk() (*[]ExternalSystemType, bool)`

GetPublishersOk returns a tuple with the Publishers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishers

`func (o *PostPublishersRequest) SetPublishers(v []ExternalSystemType)`

SetPublishers sets Publishers field to given value.

### HasPublishers

`func (o *PostPublishersRequest) HasPublishers() bool`

HasPublishers returns a boolean if a field has been set.

### GetSubscriber

`func (o *PostPublishersRequest) GetSubscriber() ExternalSystemType`

GetSubscriber returns the Subscriber field if non-nil, zero value otherwise.

### GetSubscriberOk

`func (o *PostPublishersRequest) GetSubscriberOk() (*ExternalSystemType, bool)`

GetSubscriberOk returns a tuple with the Subscriber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubscriber

`func (o *PostPublishersRequest) SetSubscriber(v ExternalSystemType)`

SetSubscriber sets Subscriber field to given value.

### HasSubscriber

`func (o *PostPublishersRequest) HasSubscriber() bool`

HasSubscriber returns a boolean if a field has been set.

### GetWarnings

`func (o *PostPublishersRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostPublishersRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostPublishersRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostPublishersRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


