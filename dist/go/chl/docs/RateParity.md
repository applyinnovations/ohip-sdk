# RateParity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateParity** | Pointer to [**RateParityType**](RateParityType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateParity

`func NewRateParity() *RateParity`

NewRateParity instantiates a new RateParity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateParityWithDefaults

`func NewRateParityWithDefaults() *RateParity`

NewRateParityWithDefaults instantiates a new RateParity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RateParity) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateParity) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateParity) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateParity) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateParity

`func (o *RateParity) GetRateParity() RateParityType`

GetRateParity returns the RateParity field if non-nil, zero value otherwise.

### GetRateParityOk

`func (o *RateParity) GetRateParityOk() (*RateParityType, bool)`

GetRateParityOk returns a tuple with the RateParity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateParity

`func (o *RateParity) SetRateParity(v RateParityType)`

SetRateParity sets RateParity field to given value.

### HasRateParity

`func (o *RateParity) HasRateParity() bool`

HasRateParity returns a boolean if a field has been set.

### GetWarnings

`func (o *RateParity) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateParity) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateParity) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateParity) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


