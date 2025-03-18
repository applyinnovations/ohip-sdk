# SalesAllowanceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CeilingId** | Pointer to [**SalesAllowanceIDType**](SalesAllowanceIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Properties for which sales allowances exist. | [optional] 
**AllotmentDeductQty** | Pointer to **int32** | Number of Room nights booked at a deduct status for the date. | [optional] 
**CeilingDate** | Pointer to **string** | Ceiling date for the Sales Allowance. | [optional] 
**SalesAllowance** | Pointer to **int32** | Number of Rooms allotted for the Sales Allowance. | [optional] 
**Booked** | Pointer to **int32** | Number of Rooms booked against the Sales Allowance. | [optional] 
**OverBooked** | Pointer to **int32** | Number of rooms booked that is more than the allotted Sales Allowance. | [optional] 
**Available** | Pointer to **int32** | Number of rooms still available on the Sales Allowance. | [optional] 

## Methods

### NewSalesAllowanceType

`func NewSalesAllowanceType() *SalesAllowanceType`

NewSalesAllowanceType instantiates a new SalesAllowanceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSalesAllowanceTypeWithDefaults

`func NewSalesAllowanceTypeWithDefaults() *SalesAllowanceType`

NewSalesAllowanceTypeWithDefaults instantiates a new SalesAllowanceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCeilingId

`func (o *SalesAllowanceType) GetCeilingId() SalesAllowanceIDType`

GetCeilingId returns the CeilingId field if non-nil, zero value otherwise.

### GetCeilingIdOk

`func (o *SalesAllowanceType) GetCeilingIdOk() (*SalesAllowanceIDType, bool)`

GetCeilingIdOk returns a tuple with the CeilingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCeilingId

`func (o *SalesAllowanceType) SetCeilingId(v SalesAllowanceIDType)`

SetCeilingId sets CeilingId field to given value.

### HasCeilingId

`func (o *SalesAllowanceType) HasCeilingId() bool`

HasCeilingId returns a boolean if a field has been set.

### GetHotelId

`func (o *SalesAllowanceType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SalesAllowanceType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SalesAllowanceType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SalesAllowanceType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAllotmentDeductQty

`func (o *SalesAllowanceType) GetAllotmentDeductQty() int32`

GetAllotmentDeductQty returns the AllotmentDeductQty field if non-nil, zero value otherwise.

### GetAllotmentDeductQtyOk

`func (o *SalesAllowanceType) GetAllotmentDeductQtyOk() (*int32, bool)`

GetAllotmentDeductQtyOk returns a tuple with the AllotmentDeductQty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAllotmentDeductQty

`func (o *SalesAllowanceType) SetAllotmentDeductQty(v int32)`

SetAllotmentDeductQty sets AllotmentDeductQty field to given value.

### HasAllotmentDeductQty

`func (o *SalesAllowanceType) HasAllotmentDeductQty() bool`

HasAllotmentDeductQty returns a boolean if a field has been set.

### GetCeilingDate

`func (o *SalesAllowanceType) GetCeilingDate() string`

GetCeilingDate returns the CeilingDate field if non-nil, zero value otherwise.

### GetCeilingDateOk

`func (o *SalesAllowanceType) GetCeilingDateOk() (*string, bool)`

GetCeilingDateOk returns a tuple with the CeilingDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCeilingDate

`func (o *SalesAllowanceType) SetCeilingDate(v string)`

SetCeilingDate sets CeilingDate field to given value.

### HasCeilingDate

`func (o *SalesAllowanceType) HasCeilingDate() bool`

HasCeilingDate returns a boolean if a field has been set.

### GetSalesAllowance

`func (o *SalesAllowanceType) GetSalesAllowance() int32`

GetSalesAllowance returns the SalesAllowance field if non-nil, zero value otherwise.

### GetSalesAllowanceOk

`func (o *SalesAllowanceType) GetSalesAllowanceOk() (*int32, bool)`

GetSalesAllowanceOk returns a tuple with the SalesAllowance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSalesAllowance

`func (o *SalesAllowanceType) SetSalesAllowance(v int32)`

SetSalesAllowance sets SalesAllowance field to given value.

### HasSalesAllowance

`func (o *SalesAllowanceType) HasSalesAllowance() bool`

HasSalesAllowance returns a boolean if a field has been set.

### GetBooked

`func (o *SalesAllowanceType) GetBooked() int32`

GetBooked returns the Booked field if non-nil, zero value otherwise.

### GetBookedOk

`func (o *SalesAllowanceType) GetBookedOk() (*int32, bool)`

GetBookedOk returns a tuple with the Booked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBooked

`func (o *SalesAllowanceType) SetBooked(v int32)`

SetBooked sets Booked field to given value.

### HasBooked

`func (o *SalesAllowanceType) HasBooked() bool`

HasBooked returns a boolean if a field has been set.

### GetOverBooked

`func (o *SalesAllowanceType) GetOverBooked() int32`

GetOverBooked returns the OverBooked field if non-nil, zero value otherwise.

### GetOverBookedOk

`func (o *SalesAllowanceType) GetOverBookedOk() (*int32, bool)`

GetOverBookedOk returns a tuple with the OverBooked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverBooked

`func (o *SalesAllowanceType) SetOverBooked(v int32)`

SetOverBooked sets OverBooked field to given value.

### HasOverBooked

`func (o *SalesAllowanceType) HasOverBooked() bool`

HasOverBooked returns a boolean if a field has been set.

### GetAvailable

`func (o *SalesAllowanceType) GetAvailable() int32`

GetAvailable returns the Available field if non-nil, zero value otherwise.

### GetAvailableOk

`func (o *SalesAllowanceType) GetAvailableOk() (*int32, bool)`

GetAvailableOk returns a tuple with the Available field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailable

`func (o *SalesAllowanceType) SetAvailable(v int32)`

SetAvailable sets Available field to given value.

### HasAvailable

`func (o *SalesAllowanceType) HasAvailable() bool`

HasAvailable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


