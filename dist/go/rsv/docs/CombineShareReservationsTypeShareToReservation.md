# CombineShareReservationsTypeShareToReservation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**DailyRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 

## Methods

### NewCombineShareReservationsTypeShareToReservation

`func NewCombineShareReservationsTypeShareToReservation() *CombineShareReservationsTypeShareToReservation`

NewCombineShareReservationsTypeShareToReservation instantiates a new CombineShareReservationsTypeShareToReservation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCombineShareReservationsTypeShareToReservationWithDefaults

`func NewCombineShareReservationsTypeShareToReservationWithDefaults() *CombineShareReservationsTypeShareToReservation`

NewCombineShareReservationsTypeShareToReservationWithDefaults instantiates a new CombineShareReservationsTypeShareToReservation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationIdList

`func (o *CombineShareReservationsTypeShareToReservation) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *CombineShareReservationsTypeShareToReservation) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *CombineShareReservationsTypeShareToReservation) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *CombineShareReservationsTypeShareToReservation) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetDailyRates

`func (o *CombineShareReservationsTypeShareToReservation) GetDailyRates() []DailyRateType`

GetDailyRates returns the DailyRates field if non-nil, zero value otherwise.

### GetDailyRatesOk

`func (o *CombineShareReservationsTypeShareToReservation) GetDailyRatesOk() (*[]DailyRateType, bool)`

GetDailyRatesOk returns a tuple with the DailyRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyRates

`func (o *CombineShareReservationsTypeShareToReservation) SetDailyRates(v []DailyRateType)`

SetDailyRates sets DailyRates field to given value.

### HasDailyRates

`func (o *CombineShareReservationsTypeShareToReservation) HasDailyRates() bool`

HasDailyRates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


