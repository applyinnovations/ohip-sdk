# RegionalRateParity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RegionalRateParity** | Pointer to [**RegionalRateParityType**](RegionalRateParityType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRegionalRateParity

`func NewRegionalRateParity() *RegionalRateParity`

NewRegionalRateParity instantiates a new RegionalRateParity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRegionalRateParityWithDefaults

`func NewRegionalRateParityWithDefaults() *RegionalRateParity`

NewRegionalRateParityWithDefaults instantiates a new RegionalRateParity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRegionalRateParity

`func (o *RegionalRateParity) GetRegionalRateParity() RegionalRateParityType`

GetRegionalRateParity returns the RegionalRateParity field if non-nil, zero value otherwise.

### GetRegionalRateParityOk

`func (o *RegionalRateParity) GetRegionalRateParityOk() (*RegionalRateParityType, bool)`

GetRegionalRateParityOk returns a tuple with the RegionalRateParity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegionalRateParity

`func (o *RegionalRateParity) SetRegionalRateParity(v RegionalRateParityType)`

SetRegionalRateParity sets RegionalRateParity field to given value.

### HasRegionalRateParity

`func (o *RegionalRateParity) HasRegionalRateParity() bool`

HasRegionalRateParity returns a boolean if a field has been set.

### GetLinks

`func (o *RegionalRateParity) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RegionalRateParity) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RegionalRateParity) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RegionalRateParity) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RegionalRateParity) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RegionalRateParity) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RegionalRateParity) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RegionalRateParity) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


