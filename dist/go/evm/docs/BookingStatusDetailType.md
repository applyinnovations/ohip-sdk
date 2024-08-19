# BookingStatusDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BookingStatus** | Pointer to [**BookingStatusType**](BookingStatusType.md) |  | [optional] 
**CatStatusType** | Pointer to [**BlockStatusTypeType**](BlockStatusTypeType.md) |  | [optional] 
**CateringDeductInventory** | Pointer to **bool** | Indicates if catering event&#39;s spaces are deducted from inventory | [optional] 
**DeductInventory** | Pointer to **bool** | Indicates if blocked rooms are deducted from inventory. | [optional] 
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

### GetCateringDeductInventory

`func (o *BookingStatusDetailType) GetCateringDeductInventory() bool`

GetCateringDeductInventory returns the CateringDeductInventory field if non-nil, zero value otherwise.

### GetCateringDeductInventoryOk

`func (o *BookingStatusDetailType) GetCateringDeductInventoryOk() (*bool, bool)`

GetCateringDeductInventoryOk returns a tuple with the CateringDeductInventory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringDeductInventory

`func (o *BookingStatusDetailType) SetCateringDeductInventory(v bool)`

SetCateringDeductInventory sets CateringDeductInventory field to given value.

### HasCateringDeductInventory

`func (o *BookingStatusDetailType) HasCateringDeductInventory() bool`

HasCateringDeductInventory returns a boolean if a field has been set.

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


