# BookingStatusDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPickup** | Pointer to **bool** | Indicates if business blocks with this status will be allowed for pickup or not. | [optional] 
**BookingStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**CancellationType** | Pointer to [**BlockCancellationTypeType**](BlockCancellationTypeType.md) |  | [optional] 
**CatDeductInventory** | Pointer to **bool** | Indicates if catering event&#39;s spaces are deducted from inventory | [optional] 
**CatStatusType** | Pointer to [**BlockStatusTypeType**](BlockStatusTypeType.md) |  | [optional] 
**DeductInventory** | Pointer to **bool** | Indicates if blocked rooms are deducted from inventory. | [optional] 
**DefaultReservationType** | Pointer to **string** | Default reservation type for the booking status. | [optional] 
**ParentBookingStatus** | Pointer to **string** | Parent status of the booking status, if one exists. | [optional] 
**ReturnToInventory** | Pointer to **bool** | Indicates if blocked rooms will be returned to availability or not. | [optional] 
**StatusType** | Pointer to [**BlockStatusTypeType**](BlockStatusTypeType.md) |  | [optional] 

## Methods

### NewBookingStatusDetailType

`func NewBookingStatusDetailType() *BookingStatusDetailType`

NewBookingStatusDetailType instantiates a new BookingStatusDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBookingStatusDetailTypeWithDefaults

`func NewBookingStatusDetailTypeWithDefaults() *BookingStatusDetailType`

NewBookingStatusDetailTypeWithDefaults instantiates a new BookingStatusDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAllowPickup

`func (o *BookingStatusDetailType) GetAllowPickup() bool`

GetAllowPickup returns the AllowPickup field if non-nil, zero value otherwise.

### GetAllowPickupOk

`func (o *BookingStatusDetailType) GetAllowPickupOk() (*bool, bool)`

GetAllowPickupOk returns a tuple with the AllowPickup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllowPickup

`func (o *BookingStatusDetailType) SetAllowPickup(v bool)`

SetAllowPickup sets AllowPickup field to given value.

### HasAllowPickup

`func (o *BookingStatusDetailType) HasAllowPickup() bool`

HasAllowPickup returns a boolean if a field has been set.

### GetBookingStatus

`func (o *BookingStatusDetailType) GetBookingStatus() BookingStatusType`

GetBookingStatus returns the BookingStatus field if non-nil, zero value otherwise.

### GetBookingStatusOk

`func (o *BookingStatusDetailType) GetBookingStatusOk() (*BookingStatusType, bool)`

GetBookingStatusOk returns a tuple with the BookingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingStatus

`func (o *BookingStatusDetailType) SetBookingStatus(v BookingStatusType)`

SetBookingStatus sets BookingStatus field to given value.

### HasBookingStatus

`func (o *BookingStatusDetailType) HasBookingStatus() bool`

HasBookingStatus returns a boolean if a field has been set.

### GetCancellationType

`func (o *BookingStatusDetailType) GetCancellationType() BlockCancellationTypeType`

GetCancellationType returns the CancellationType field if non-nil, zero value otherwise.

### GetCancellationTypeOk

`func (o *BookingStatusDetailType) GetCancellationTypeOk() (*BlockCancellationTypeType, bool)`

GetCancellationTypeOk returns a tuple with the CancellationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancellationType

`func (o *BookingStatusDetailType) SetCancellationType(v BlockCancellationTypeType)`

SetCancellationType sets CancellationType field to given value.

### HasCancellationType

`func (o *BookingStatusDetailType) HasCancellationType() bool`

HasCancellationType returns a boolean if a field has been set.

### GetCatDeductInventory

`func (o *BookingStatusDetailType) GetCatDeductInventory() bool`

GetCatDeductInventory returns the CatDeductInventory field if non-nil, zero value otherwise.

### GetCatDeductInventoryOk

`func (o *BookingStatusDetailType) GetCatDeductInventoryOk() (*bool, bool)`

GetCatDeductInventoryOk returns a tuple with the CatDeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatDeductInventory

`func (o *BookingStatusDetailType) SetCatDeductInventory(v bool)`

SetCatDeductInventory sets CatDeductInventory field to given value.

### HasCatDeductInventory

`func (o *BookingStatusDetailType) HasCatDeductInventory() bool`

HasCatDeductInventory returns a boolean if a field has been set.

### GetCatStatusType

`func (o *BookingStatusDetailType) GetCatStatusType() BlockStatusTypeType`

GetCatStatusType returns the CatStatusType field if non-nil, zero value otherwise.

### GetCatStatusTypeOk

`func (o *BookingStatusDetailType) GetCatStatusTypeOk() (*BlockStatusTypeType, bool)`

GetCatStatusTypeOk returns a tuple with the CatStatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCatStatusType

`func (o *BookingStatusDetailType) SetCatStatusType(v BlockStatusTypeType)`

SetCatStatusType sets CatStatusType field to given value.

### HasCatStatusType

`func (o *BookingStatusDetailType) HasCatStatusType() bool`

HasCatStatusType returns a boolean if a field has been set.

### GetDeductInventory

`func (o *BookingStatusDetailType) GetDeductInventory() bool`

GetDeductInventory returns the DeductInventory field if non-nil, zero value otherwise.

### GetDeductInventoryOk

`func (o *BookingStatusDetailType) GetDeductInventoryOk() (*bool, bool)`

GetDeductInventoryOk returns a tuple with the DeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeductInventory

`func (o *BookingStatusDetailType) SetDeductInventory(v bool)`

SetDeductInventory sets DeductInventory field to given value.

### HasDeductInventory

`func (o *BookingStatusDetailType) HasDeductInventory() bool`

HasDeductInventory returns a boolean if a field has been set.

### GetDefaultReservationType

`func (o *BookingStatusDetailType) GetDefaultReservationType() string`

GetDefaultReservationType returns the DefaultReservationType field if non-nil, zero value otherwise.

### GetDefaultReservationTypeOk

`func (o *BookingStatusDetailType) GetDefaultReservationTypeOk() (*string, bool)`

GetDefaultReservationTypeOk returns a tuple with the DefaultReservationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultReservationType

`func (o *BookingStatusDetailType) SetDefaultReservationType(v string)`

SetDefaultReservationType sets DefaultReservationType field to given value.

### HasDefaultReservationType

`func (o *BookingStatusDetailType) HasDefaultReservationType() bool`

HasDefaultReservationType returns a boolean if a field has been set.

### GetParentBookingStatus

`func (o *BookingStatusDetailType) GetParentBookingStatus() string`

GetParentBookingStatus returns the ParentBookingStatus field if non-nil, zero value otherwise.

### GetParentBookingStatusOk

`func (o *BookingStatusDetailType) GetParentBookingStatusOk() (*string, bool)`

GetParentBookingStatusOk returns a tuple with the ParentBookingStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParentBookingStatus

`func (o *BookingStatusDetailType) SetParentBookingStatus(v string)`

SetParentBookingStatus sets ParentBookingStatus field to given value.

### HasParentBookingStatus

`func (o *BookingStatusDetailType) HasParentBookingStatus() bool`

HasParentBookingStatus returns a boolean if a field has been set.

### GetReturnToInventory

`func (o *BookingStatusDetailType) GetReturnToInventory() bool`

GetReturnToInventory returns the ReturnToInventory field if non-nil, zero value otherwise.

### GetReturnToInventoryOk

`func (o *BookingStatusDetailType) GetReturnToInventoryOk() (*bool, bool)`

GetReturnToInventoryOk returns a tuple with the ReturnToInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReturnToInventory

`func (o *BookingStatusDetailType) SetReturnToInventory(v bool)`

SetReturnToInventory sets ReturnToInventory field to given value.

### HasReturnToInventory

`func (o *BookingStatusDetailType) HasReturnToInventory() bool`

HasReturnToInventory returns a boolean if a field has been set.

### GetStatusType

`func (o *BookingStatusDetailType) GetStatusType() BlockStatusTypeType`

GetStatusType returns the StatusType field if non-nil, zero value otherwise.

### GetStatusTypeOk

`func (o *BookingStatusDetailType) GetStatusTypeOk() (*BlockStatusTypeType, bool)`

GetStatusTypeOk returns a tuple with the StatusType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusType

`func (o *BookingStatusDetailType) SetStatusType(v BlockStatusTypeType)`

SetStatusType sets StatusType field to given value.

### HasStatusType

`func (o *BookingStatusDetailType) HasStatusType() bool`

HasStatusType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


