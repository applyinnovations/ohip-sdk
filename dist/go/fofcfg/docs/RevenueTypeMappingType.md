# RevenueTypeMappingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueTypeMappingId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the Revenue Type Mapping belongs to. | [optional] 
**RevenueType** | Pointer to **string** | Provides information about the Revenue Type. | [optional] 
**EventType** | Pointer to **string** | Provides information about the Event Type. | [optional] 
**Space** | Pointer to **string** | Provides information about the Space/Location for the Revenue Type. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code for the Revenue Type. | [optional] 
**CateringOnly** | Pointer to [**CateringOnlyType**](CateringOnlyType.md) |  | [optional] 
**ServiceCharge** | Pointer to **float32** | Service Charge for the Revenue Type. | [optional] 
**ServiceChargeTrxCode** | Pointer to **string** | Service Charge for the Revenue Type. | [optional] 
**ServiceChargeCalulationMethod** | Pointer to **string** | Service Charge for the Revenue Type. | [optional] 

## Methods

### NewRevenueTypeMappingType

`func NewRevenueTypeMappingType() *RevenueTypeMappingType`

NewRevenueTypeMappingType instantiates a new RevenueTypeMappingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevenueTypeMappingTypeWithDefaults

`func NewRevenueTypeMappingTypeWithDefaults() *RevenueTypeMappingType`

NewRevenueTypeMappingTypeWithDefaults instantiates a new RevenueTypeMappingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueTypeMappingId

`func (o *RevenueTypeMappingType) GetRevenueTypeMappingId() UniqueIDType`

GetRevenueTypeMappingId returns the RevenueTypeMappingId field if non-nil, zero value otherwise.

### GetRevenueTypeMappingIdOk

`func (o *RevenueTypeMappingType) GetRevenueTypeMappingIdOk() (*UniqueIDType, bool)`

GetRevenueTypeMappingIdOk returns a tuple with the RevenueTypeMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeMappingId

`func (o *RevenueTypeMappingType) SetRevenueTypeMappingId(v UniqueIDType)`

SetRevenueTypeMappingId sets RevenueTypeMappingId field to given value.

### HasRevenueTypeMappingId

`func (o *RevenueTypeMappingType) HasRevenueTypeMappingId() bool`

HasRevenueTypeMappingId returns a boolean if a field has been set.

### GetHotelId

`func (o *RevenueTypeMappingType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RevenueTypeMappingType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RevenueTypeMappingType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RevenueTypeMappingType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRevenueType

`func (o *RevenueTypeMappingType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *RevenueTypeMappingType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *RevenueTypeMappingType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *RevenueTypeMappingType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetEventType

`func (o *RevenueTypeMappingType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *RevenueTypeMappingType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *RevenueTypeMappingType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *RevenueTypeMappingType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetSpace

`func (o *RevenueTypeMappingType) GetSpace() string`

GetSpace returns the Space field if non-nil, zero value otherwise.

### GetSpaceOk

`func (o *RevenueTypeMappingType) GetSpaceOk() (*string, bool)`

GetSpaceOk returns a tuple with the Space field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpace

`func (o *RevenueTypeMappingType) SetSpace(v string)`

SetSpace sets Space field to given value.

### HasSpace

`func (o *RevenueTypeMappingType) HasSpace() bool`

HasSpace returns a boolean if a field has been set.

### GetTransactionCode

`func (o *RevenueTypeMappingType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *RevenueTypeMappingType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *RevenueTypeMappingType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *RevenueTypeMappingType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetCateringOnly

`func (o *RevenueTypeMappingType) GetCateringOnly() CateringOnlyType`

GetCateringOnly returns the CateringOnly field if non-nil, zero value otherwise.

### GetCateringOnlyOk

`func (o *RevenueTypeMappingType) GetCateringOnlyOk() (*CateringOnlyType, bool)`

GetCateringOnlyOk returns a tuple with the CateringOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOnly

`func (o *RevenueTypeMappingType) SetCateringOnly(v CateringOnlyType)`

SetCateringOnly sets CateringOnly field to given value.

### HasCateringOnly

`func (o *RevenueTypeMappingType) HasCateringOnly() bool`

HasCateringOnly returns a boolean if a field has been set.

### GetServiceCharge

`func (o *RevenueTypeMappingType) GetServiceCharge() float32`

GetServiceCharge returns the ServiceCharge field if non-nil, zero value otherwise.

### GetServiceChargeOk

`func (o *RevenueTypeMappingType) GetServiceChargeOk() (*float32, bool)`

GetServiceChargeOk returns a tuple with the ServiceCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceCharge

`func (o *RevenueTypeMappingType) SetServiceCharge(v float32)`

SetServiceCharge sets ServiceCharge field to given value.

### HasServiceCharge

`func (o *RevenueTypeMappingType) HasServiceCharge() bool`

HasServiceCharge returns a boolean if a field has been set.

### GetServiceChargeTrxCode

`func (o *RevenueTypeMappingType) GetServiceChargeTrxCode() string`

GetServiceChargeTrxCode returns the ServiceChargeTrxCode field if non-nil, zero value otherwise.

### GetServiceChargeTrxCodeOk

`func (o *RevenueTypeMappingType) GetServiceChargeTrxCodeOk() (*string, bool)`

GetServiceChargeTrxCodeOk returns a tuple with the ServiceChargeTrxCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceChargeTrxCode

`func (o *RevenueTypeMappingType) SetServiceChargeTrxCode(v string)`

SetServiceChargeTrxCode sets ServiceChargeTrxCode field to given value.

### HasServiceChargeTrxCode

`func (o *RevenueTypeMappingType) HasServiceChargeTrxCode() bool`

HasServiceChargeTrxCode returns a boolean if a field has been set.

### GetServiceChargeCalulationMethod

`func (o *RevenueTypeMappingType) GetServiceChargeCalulationMethod() string`

GetServiceChargeCalulationMethod returns the ServiceChargeCalulationMethod field if non-nil, zero value otherwise.

### GetServiceChargeCalulationMethodOk

`func (o *RevenueTypeMappingType) GetServiceChargeCalulationMethodOk() (*string, bool)`

GetServiceChargeCalulationMethodOk returns a tuple with the ServiceChargeCalulationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceChargeCalulationMethod

`func (o *RevenueTypeMappingType) SetServiceChargeCalulationMethod(v string)`

SetServiceChargeCalulationMethod sets ServiceChargeCalulationMethod field to given value.

### HasServiceChargeCalulationMethod

`func (o *RevenueTypeMappingType) HasServiceChargeCalulationMethod() bool`

HasServiceChargeCalulationMethod returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


