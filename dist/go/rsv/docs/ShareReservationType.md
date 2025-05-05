# ShareReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**DailyRates** | Pointer to [**[]DailyRateType**](DailyRateType.md) | Defines room rate information on a daily basis. | [optional] 

## Methods

### NewShareReservationType

`func NewShareReservationType() *ShareReservationType`

NewShareReservationType instantiates a new ShareReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewShareReservationTypeWithDefaults

`func NewShareReservationTypeWithDefaults() *ShareReservationType`

NewShareReservationTypeWithDefaults instantiates a new ShareReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationId

`func (o *ShareReservationType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ShareReservationType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ShareReservationType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ShareReservationType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetDailyRates

`func (o *ShareReservationType) GetDailyRates() []DailyRateType`

GetDailyRates returns the DailyRates field if non-nil, zero value otherwise.

### GetDailyRatesOk

`func (o *ShareReservationType) GetDailyRatesOk() (*[]DailyRateType, bool)`

GetDailyRatesOk returns a tuple with the DailyRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDailyRates

`func (o *ShareReservationType) SetDailyRates(v []DailyRateType)`

SetDailyRates sets DailyRates field to given value.

### HasDailyRates

`func (o *ShareReservationType) HasDailyRates() bool`

HasDailyRates returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


