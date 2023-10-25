# PutChannelRateCategoriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateCategories** | Pointer to [**ChannelRateCategoriesRateCategories**](ChannelRateCategoriesRateCategories.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutChannelRateCategoriesRequest

`func NewPutChannelRateCategoriesRequest() *PutChannelRateCategoriesRequest`

NewPutChannelRateCategoriesRequest instantiates a new PutChannelRateCategoriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutChannelRateCategoriesRequestWithDefaults

`func NewPutChannelRateCategoriesRequestWithDefaults() *PutChannelRateCategoriesRequest`

NewPutChannelRateCategoriesRequestWithDefaults instantiates a new PutChannelRateCategoriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutChannelRateCategoriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutChannelRateCategoriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutChannelRateCategoriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutChannelRateCategoriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateCategories

`func (o *PutChannelRateCategoriesRequest) GetRateCategories() ChannelRateCategoriesRateCategories`

GetRateCategories returns the RateCategories field if non-nil, zero value otherwise.

### GetRateCategoriesOk

`func (o *PutChannelRateCategoriesRequest) GetRateCategoriesOk() (*ChannelRateCategoriesRateCategories, bool)`

GetRateCategoriesOk returns a tuple with the RateCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateCategories

`func (o *PutChannelRateCategoriesRequest) SetRateCategories(v ChannelRateCategoriesRateCategories)`

SetRateCategories sets RateCategories field to given value.

### HasRateCategories

`func (o *PutChannelRateCategoriesRequest) HasRateCategories() bool`

HasRateCategories returns a boolean if a field has been set.

### GetWarnings

`func (o *PutChannelRateCategoriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutChannelRateCategoriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutChannelRateCategoriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutChannelRateCategoriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


