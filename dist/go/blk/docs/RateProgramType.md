# RateProgramType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rates** | Pointer to [**[]RateProgramRateType**](RateProgramRateType.md) | Block Rate Program Rates. | [optional] 
**RoomPool** | Pointer to **string** | Room Pool Code. | [optional] 

## Methods

### NewRateProgramType

`func NewRateProgramType() *RateProgramType`

NewRateProgramType instantiates a new RateProgramType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateProgramTypeWithDefaults

`func NewRateProgramTypeWithDefaults() *RateProgramType`

NewRateProgramTypeWithDefaults instantiates a new RateProgramType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRates

`func (o *RateProgramType) GetRates() []RateProgramRateType`

GetRates returns the Rates field if non-nil, zero value otherwise.

### GetRatesOk

`func (o *RateProgramType) GetRatesOk() (*[]RateProgramRateType, bool)`

GetRatesOk returns a tuple with the Rates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRates

`func (o *RateProgramType) SetRates(v []RateProgramRateType)`

SetRates sets Rates field to given value.

### HasRates

`func (o *RateProgramType) HasRates() bool`

HasRates returns a boolean if a field has been set.

### GetRoomPool

`func (o *RateProgramType) GetRoomPool() string`

GetRoomPool returns the RoomPool field if non-nil, zero value otherwise.

### GetRoomPoolOk

`func (o *RateProgramType) GetRoomPoolOk() (*string, bool)`

GetRoomPoolOk returns a tuple with the RoomPool field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomPool

`func (o *RateProgramType) SetRoomPool(v string)`

SetRoomPool sets RoomPool field to given value.

### HasRoomPool

`func (o *RateProgramType) HasRoomPool() bool`

HasRoomPool returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


