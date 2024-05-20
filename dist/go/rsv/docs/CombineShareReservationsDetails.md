# CombineShareReservationsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EffectiveRates** | Pointer to [**[]EffectiveRateType**](EffectiveRateType.md) | Collection of effective rate amount per guest on specific dates. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**NewRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 
**OldRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 
**ShareReservations** | Pointer to [**HotelReservationsType**](HotelReservationsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCombineShareReservationsDetails

`func NewCombineShareReservationsDetails() *CombineShareReservationsDetails`

NewCombineShareReservationsDetails instantiates a new CombineShareReservationsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareReservationsDetailsWithDefaults

`func NewCombineShareReservationsDetailsWithDefaults() *CombineShareReservationsDetails`

NewCombineShareReservationsDetailsWithDefaults instantiates a new CombineShareReservationsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffectiveRates

`func (o *CombineShareReservationsDetails) GetEffectiveRates() []EffectiveRateType`

GetEffectiveRates returns the EffectiveRates field if non-nil, zero value otherwise.

### GetEffectiveRatesOk

`func (o *CombineShareReservationsDetails) GetEffectiveRatesOk() (*[]EffectiveRateType, bool)`

GetEffectiveRatesOk returns a tuple with the EffectiveRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffectiveRates

`func (o *CombineShareReservationsDetails) SetEffectiveRates(v []EffectiveRateType)`

SetEffectiveRates sets EffectiveRates field to given value.

### HasEffectiveRates

`func (o *CombineShareReservationsDetails) HasEffectiveRates() bool`

HasEffectiveRates returns a boolean if a field has been set.

### GetLinks

`func (o *CombineShareReservationsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CombineShareReservationsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CombineShareReservationsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CombineShareReservationsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetNewRates

`func (o *CombineShareReservationsDetails) GetNewRates() []DailyRateType`

GetNewRates returns the NewRates field if non-nil, zero value otherwise.

### GetNewRatesOk

`func (o *CombineShareReservationsDetails) GetNewRatesOk() (*[]DailyRateType, bool)`

GetNewRatesOk returns a tuple with the NewRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRates

`func (o *CombineShareReservationsDetails) SetNewRates(v []DailyRateType)`

SetNewRates sets NewRates field to given value.

### HasNewRates

`func (o *CombineShareReservationsDetails) HasNewRates() bool`

HasNewRates returns a boolean if a field has been set.

### GetOldRates

`func (o *CombineShareReservationsDetails) GetOldRates() []DailyRateType`

GetOldRates returns the OldRates field if non-nil, zero value otherwise.

### GetOldRatesOk

`func (o *CombineShareReservationsDetails) GetOldRatesOk() (*[]DailyRateType, bool)`

GetOldRatesOk returns a tuple with the OldRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldRates

`func (o *CombineShareReservationsDetails) SetOldRates(v []DailyRateType)`

SetOldRates sets OldRates field to given value.

### HasOldRates

`func (o *CombineShareReservationsDetails) HasOldRates() bool`

HasOldRates returns a boolean if a field has been set.

### GetShareReservations

`func (o *CombineShareReservationsDetails) GetShareReservations() HotelReservationsType`

GetShareReservations returns the ShareReservations field if non-nil, zero value otherwise.

### GetShareReservationsOk

`func (o *CombineShareReservationsDetails) GetShareReservationsOk() (*HotelReservationsType, bool)`

GetShareReservationsOk returns a tuple with the ShareReservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShareReservations

`func (o *CombineShareReservationsDetails) SetShareReservations(v HotelReservationsType)`

SetShareReservations sets ShareReservations field to given value.

### HasShareReservations

`func (o *CombineShareReservationsDetails) HasShareReservations() bool`

HasShareReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *CombineShareReservationsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CombineShareReservationsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CombineShareReservationsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CombineShareReservationsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


