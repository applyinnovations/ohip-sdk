# PostHurdleRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HurdleRates** | Pointer to [**[]HurdleRateType**](HurdleRateType.md) | Details for hurdle rate. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHurdleRatesRequest

`func NewPostHurdleRatesRequest() *PostHurdleRatesRequest`

NewPostHurdleRatesRequest instantiates a new PostHurdleRatesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHurdleRatesRequestWithDefaults

`func NewPostHurdleRatesRequestWithDefaults() *PostHurdleRatesRequest`

NewPostHurdleRatesRequestWithDefaults instantiates a new PostHurdleRatesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHurdleRates

`func (o *PostHurdleRatesRequest) GetHurdleRates() []HurdleRateType`

GetHurdleRates returns the HurdleRates field if non-nil, zero value otherwise.

### GetHurdleRatesOk

`func (o *PostHurdleRatesRequest) GetHurdleRatesOk() (*[]HurdleRateType, bool)`

GetHurdleRatesOk returns a tuple with the HurdleRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHurdleRates

`func (o *PostHurdleRatesRequest) SetHurdleRates(v []HurdleRateType)`

SetHurdleRates sets HurdleRates field to given value.

### HasHurdleRates

`func (o *PostHurdleRatesRequest) HasHurdleRates() bool`

HasHurdleRates returns a boolean if a field has been set.

### GetLinks

`func (o *PostHurdleRatesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHurdleRatesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHurdleRatesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHurdleRatesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHurdleRatesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHurdleRatesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHurdleRatesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHurdleRatesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


