# YieldMarketTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 
**YieldMarketTypes** | Pointer to [**[]YieldMarketTypeType**](YieldMarketTypeType.md) | List of Yield Market Type to be configured or fetched | [optional] 

## Methods

### NewYieldMarketTypesDetails

`func NewYieldMarketTypesDetails() *YieldMarketTypesDetails`

NewYieldMarketTypesDetails instantiates a new YieldMarketTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewYieldMarketTypesDetailsWithDefaults

`func NewYieldMarketTypesDetailsWithDefaults() *YieldMarketTypesDetails`

NewYieldMarketTypesDetailsWithDefaults instantiates a new YieldMarketTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *YieldMarketTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *YieldMarketTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *YieldMarketTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *YieldMarketTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *YieldMarketTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *YieldMarketTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *YieldMarketTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *YieldMarketTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.

### GetYieldMarketTypes

`func (o *YieldMarketTypesDetails) GetYieldMarketTypes() []YieldMarketTypeType`

GetYieldMarketTypes returns the YieldMarketTypes field if non-nil, zero value otherwise.

### GetYieldMarketTypesOk

`func (o *YieldMarketTypesDetails) GetYieldMarketTypesOk() (*[]YieldMarketTypeType, bool)`

GetYieldMarketTypesOk returns a tuple with the YieldMarketTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetYieldMarketTypes

`func (o *YieldMarketTypesDetails) SetYieldMarketTypes(v []YieldMarketTypeType)`

SetYieldMarketTypes sets YieldMarketTypes field to given value.

### HasYieldMarketTypes

`func (o *YieldMarketTypesDetails) HasYieldMarketTypes() bool`

HasYieldMarketTypes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


