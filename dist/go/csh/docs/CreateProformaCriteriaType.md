# CreateProformaCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property code. | [optional] 
**ReservationIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ResponseInstruction** | Pointer to [**ProformaResponseInstructionType**](ProformaResponseInstructionType.md) |  | [optional] 

## Methods

### NewCreateProformaCriteriaType

`func NewCreateProformaCriteriaType() *CreateProformaCriteriaType`

NewCreateProformaCriteriaType instantiates a new CreateProformaCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateProformaCriteriaTypeWithDefaults

`func NewCreateProformaCriteriaTypeWithDefaults() *CreateProformaCriteriaType`

NewCreateProformaCriteriaTypeWithDefaults instantiates a new CreateProformaCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CreateProformaCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CreateProformaCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CreateProformaCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CreateProformaCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationIdList

`func (o *CreateProformaCriteriaType) GetReservationIdList() []UniqueIDType`

GetReservationIdList returns the ReservationIdList field if non-nil, zero value otherwise.

### GetReservationIdListOk

`func (o *CreateProformaCriteriaType) GetReservationIdListOk() (*[]UniqueIDType, bool)`

GetReservationIdListOk returns a tuple with the ReservationIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationIdList

`func (o *CreateProformaCriteriaType) SetReservationIdList(v []UniqueIDType)`

SetReservationIdList sets ReservationIdList field to given value.

### HasReservationIdList

`func (o *CreateProformaCriteriaType) HasReservationIdList() bool`

HasReservationIdList returns a boolean if a field has been set.

### GetResponseInstruction

`func (o *CreateProformaCriteriaType) GetResponseInstruction() ProformaResponseInstructionType`

GetResponseInstruction returns the ResponseInstruction field if non-nil, zero value otherwise.

### GetResponseInstructionOk

`func (o *CreateProformaCriteriaType) GetResponseInstructionOk() (*ProformaResponseInstructionType, bool)`

GetResponseInstructionOk returns a tuple with the ResponseInstruction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResponseInstruction

`func (o *CreateProformaCriteriaType) SetResponseInstruction(v ProformaResponseInstructionType)`

SetResponseInstruction sets ResponseInstruction field to given value.

### HasResponseInstruction

`func (o *CreateProformaCriteriaType) HasResponseInstruction() bool`

HasResponseInstruction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


