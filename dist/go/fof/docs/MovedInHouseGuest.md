# MovedInHouseGuest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OldRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 
**NewRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 
**EffectiveRates** | Pointer to [**[]EffectiveRateType**](EffectiveRateType.md) | Collection of effective rate amount per guest on specific dates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMovedInHouseGuest

`func NewMovedInHouseGuest() *MovedInHouseGuest`

NewMovedInHouseGuest instantiates a new MovedInHouseGuest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMovedInHouseGuestWithDefaults

`func NewMovedInHouseGuestWithDefaults() *MovedInHouseGuest`

NewMovedInHouseGuestWithDefaults instantiates a new MovedInHouseGuest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOldRates

`func (o *MovedInHouseGuest) GetOldRates() []DailyRateType`

GetOldRates returns the OldRates field if non-nil, zero value otherwise.

### GetOldRatesOk

`func (o *MovedInHouseGuest) GetOldRatesOk() (*[]DailyRateType, bool)`

GetOldRatesOk returns a tuple with the OldRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRates

`func (o *MovedInHouseGuest) SetOldRates(v []DailyRateType)`

SetOldRates sets OldRates field to given value.

### HasOldRates

`func (o *MovedInHouseGuest) HasOldRates() bool`

HasOldRates returns a boolean if a field has been set.

### GetNewRates

`func (o *MovedInHouseGuest) GetNewRates() []DailyRateType`

GetNewRates returns the NewRates field if non-nil, zero value otherwise.

### GetNewRatesOk

`func (o *MovedInHouseGuest) GetNewRatesOk() (*[]DailyRateType, bool)`

GetNewRatesOk returns a tuple with the NewRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRates

`func (o *MovedInHouseGuest) SetNewRates(v []DailyRateType)`

SetNewRates sets NewRates field to given value.

### HasNewRates

`func (o *MovedInHouseGuest) HasNewRates() bool`

HasNewRates returns a boolean if a field has been set.

### GetEffectiveRates

`func (o *MovedInHouseGuest) GetEffectiveRates() []EffectiveRateType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *MovedInHouseGuest) GetEffectiveRatesOk() (*[]EffectiveRateType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *MovedInHouseGuest) SetEffectiveRates(v []EffectiveRateType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *MovedInHouseGuest) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetLinks

`func (o *MovedInHouseGuest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MovedInHouseGuest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MovedInHouseGuest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MovedInHouseGuest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MovedInHouseGuest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MovedInHouseGuest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MovedInHouseGuest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MovedInHouseGuest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


