# PostChannelRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DistributeChannelRates** | Pointer to [**DistributeChannelRatesType**](DistributeChannelRatesType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostChannelRatesRequest

`func NewPostChannelRatesRequest() *PostChannelRatesRequest`

NewPostChannelRatesRequest instantiates a new PostChannelRatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostChannelRatesRequestWithDefaults

`func NewPostChannelRatesRequestWithDefaults() *PostChannelRatesRequest`

NewPostChannelRatesRequestWithDefaults instantiates a new PostChannelRatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDistributeChannelRates

`func (o *PostChannelRatesRequest) GetDistributeChannelRates() DistributeChannelRatesType`

GetDistributeChannelRates returns the DistributeChannelRates field if non-nil, zero value otherwise.

### GetDistributeChannelRatesOk

`func (o *PostChannelRatesRequest) GetDistributeChannelRatesOk() (*DistributeChannelRatesType, bool)`

GetDistributeChannelRatesOk returns a tuple with the DistributeChannelRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistributeChannelRates

`func (o *PostChannelRatesRequest) SetDistributeChannelRates(v DistributeChannelRatesType)`

SetDistributeChannelRates sets DistributeChannelRates field to given value.

### HasDistributeChannelRates

`func (o *PostChannelRatesRequest) HasDistributeChannelRates() bool`

HasDistributeChannelRates returns a boolean if a field has been set.

### GetLinks

`func (o *PostChannelRatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostChannelRatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostChannelRatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostChannelRatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostChannelRatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostChannelRatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostChannelRatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostChannelRatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


