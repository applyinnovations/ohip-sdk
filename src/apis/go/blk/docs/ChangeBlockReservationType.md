# ChangeBlockReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationInfo** | Pointer to [**ReservationInfoType**](ReservationInfoType.md) |  | [optional] 
**Success** | Pointer to **map[string]interface{}** | Returning an empty element of this type indicates the successful processing of an message. This is used in conjunction with the Warning Type to report any warnings or business errors. | [optional] 
**Errors** | Pointer to [**[]ErrorType**](ErrorType.md) | An error that occurred during the processing of a message. | [optional] 

## Methods

### NewChangeBlockReservationType

`func NewChangeBlockReservationType() *ChangeBlockReservationType`

NewChangeBlockReservationType instantiates a new ChangeBlockReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeBlockReservationTypeWithDefaults

`func NewChangeBlockReservationTypeWithDefaults() *ChangeBlockReservationType`

NewChangeBlockReservationTypeWithDefaults instantiates a new ChangeBlockReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationInfo

`func (o *ChangeBlockReservationType) GetReservationInfo() ReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *ChangeBlockReservationType) GetReservationInfoOk() (*ReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *ChangeBlockReservationType) SetReservationInfo(v ReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *ChangeBlockReservationType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetSuccess

`func (o *ChangeBlockReservationType) GetSuccess() map[string]interface{}`

GetSuccess returns the Success field if non-nil, zero value otherwise.

### GetSuccessOk

`func (o *ChangeBlockReservationType) GetSuccessOk() (*map[string]interface{}, bool)`

GetSuccessOk returns a tuple with the Success field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuccess

`func (o *ChangeBlockReservationType) SetSuccess(v map[string]interface{})`

SetSuccess sets Success field to given value.

### HasSuccess

`func (o *ChangeBlockReservationType) HasSuccess() bool`

HasSuccess returns a boolean if a field has been set.

### GetErrors

`func (o *ChangeBlockReservationType) GetErrors() []ErrorType`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ChangeBlockReservationType) GetErrorsOk() (*[]ErrorType, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ChangeBlockReservationType) SetErrors(v []ErrorType)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *ChangeBlockReservationType) HasErrors() bool`

HasErrors returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


