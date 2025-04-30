# CheckReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code of the reservation. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Results** | Pointer to [**[]CheckResultType**](CheckResultType.md) | Collection of status of allowed actions, attached records, and indicators of the reservation. | [optional] 

## Methods

### NewCheckReservationType

`func NewCheckReservationType() *CheckReservationType`

NewCheckReservationType instantiates a new CheckReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCheckReservationTypeWithDefaults

`func NewCheckReservationTypeWithDefaults() *CheckReservationType`

NewCheckReservationTypeWithDefaults instantiates a new CheckReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CheckReservationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CheckReservationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CheckReservationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CheckReservationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *CheckReservationType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CheckReservationType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CheckReservationType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CheckReservationType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetResults

`func (o *CheckReservationType) GetResults() []CheckResultType`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *CheckReservationType) GetResultsOk() (*[]CheckResultType, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *CheckReservationType) SetResults(v []CheckResultType)`

SetResults sets Results field to given value.

### HasResults

`func (o *CheckReservationType) HasResults() bool`

HasResults returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


