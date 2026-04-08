# ReservationKeyInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**KeyPin** | Pointer to **string** | PIN provided in keyTrack3 from the Door Lock System that is used to unlock a room. This is supported when Key Pin handling is active for the property and the Door Lock System in use. | [optional] 

## Methods

### NewReservationKeyInfoType

`func NewReservationKeyInfoType() *ReservationKeyInfoType`

NewReservationKeyInfoType instantiates a new ReservationKeyInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationKeyInfoTypeWithDefaults

`func NewReservationKeyInfoTypeWithDefaults() *ReservationKeyInfoType`

NewReservationKeyInfoTypeWithDefaults instantiates a new ReservationKeyInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKeyPin

`func (o *ReservationKeyInfoType) GetKeyPin() string`

GetKeyPin returns the KeyPin field if non-nil, zero value otherwise.

### GetKeyPinOk

`func (o *ReservationKeyInfoType) GetKeyPinOk() (*string, bool)`

GetKeyPinOk returns a tuple with the KeyPin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyPin

`func (o *ReservationKeyInfoType) SetKeyPin(v string)`

SetKeyPin sets KeyPin field to given value.

### HasKeyPin

`func (o *ReservationKeyInfoType) HasKeyPin() bool`

HasKeyPin returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


