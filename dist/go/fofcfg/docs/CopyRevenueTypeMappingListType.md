# CopyRevenueTypeMappingListType

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
**IsEventType** | Pointer to **bool** | This flag will notify the service that transactional postings will not be returned. | [optional] 
**IsSpace** | Pointer to **bool** | This flag will notify the service that transactional postings will not be returned. | [optional] 
**IsCateringOnly** | Pointer to **bool** | This flag will notify the service that transactional postings will not be returned. | [optional] 
**EventList** | Pointer to **[]string** |  | [optional] 
**SpaceList** | Pointer to **[]string** |  | [optional] 

## Methods

### NewCopyRevenueTypeMappingListType

`func NewCopyRevenueTypeMappingListType() *CopyRevenueTypeMappingListType`

NewCopyRevenueTypeMappingListType instantiates a new CopyRevenueTypeMappingListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCopyRevenueTypeMappingListTypeWithDefaults

`func NewCopyRevenueTypeMappingListTypeWithDefaults() *CopyRevenueTypeMappingListType`

NewCopyRevenueTypeMappingListTypeWithDefaults instantiates a new CopyRevenueTypeMappingListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueTypeMappingId

`func (o *CopyRevenueTypeMappingListType) GetRevenueTypeMappingId() UniqueIDType`

GetRevenueTypeMappingId returns the RevenueTypeMappingId field if non-nil, zero value otherwise.

### GetRevenueTypeMappingIdOk

`func (o *CopyRevenueTypeMappingListType) GetRevenueTypeMappingIdOk() (*UniqueIDType, bool)`

GetRevenueTypeMappingIdOk returns a tuple with the RevenueTypeMappingId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueTypeMappingId

`func (o *CopyRevenueTypeMappingListType) SetRevenueTypeMappingId(v UniqueIDType)`

SetRevenueTypeMappingId sets RevenueTypeMappingId field to given value.

### HasRevenueTypeMappingId

`func (o *CopyRevenueTypeMappingListType) HasRevenueTypeMappingId() bool`

HasRevenueTypeMappingId returns a boolean if a field has been set.

### GetHotelId

`func (o *CopyRevenueTypeMappingListType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CopyRevenueTypeMappingListType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CopyRevenueTypeMappingListType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CopyRevenueTypeMappingListType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRevenueType

`func (o *CopyRevenueTypeMappingListType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *CopyRevenueTypeMappingListType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *CopyRevenueTypeMappingListType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *CopyRevenueTypeMappingListType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetEventType

`func (o *CopyRevenueTypeMappingListType) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *CopyRevenueTypeMappingListType) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *CopyRevenueTypeMappingListType) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *CopyRevenueTypeMappingListType) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetSpace

`func (o *CopyRevenueTypeMappingListType) GetSpace() string`

GetSpace returns the Space field if non-nil, zero value otherwise.

### GetSpaceOk

`func (o *CopyRevenueTypeMappingListType) GetSpaceOk() (*string, bool)`

GetSpaceOk returns a tuple with the Space field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpace

`func (o *CopyRevenueTypeMappingListType) SetSpace(v string)`

SetSpace sets Space field to given value.

### HasSpace

`func (o *CopyRevenueTypeMappingListType) HasSpace() bool`

HasSpace returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CopyRevenueTypeMappingListType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CopyRevenueTypeMappingListType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CopyRevenueTypeMappingListType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CopyRevenueTypeMappingListType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetCateringOnly

`func (o *CopyRevenueTypeMappingListType) GetCateringOnly() CateringOnlyType`

GetCateringOnly returns the CateringOnly field if non-nil, zero value otherwise.

### GetCateringOnlyOk

`func (o *CopyRevenueTypeMappingListType) GetCateringOnlyOk() (*CateringOnlyType, bool)`

GetCateringOnlyOk returns a tuple with the CateringOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCateringOnly

`func (o *CopyRevenueTypeMappingListType) SetCateringOnly(v CateringOnlyType)`

SetCateringOnly sets CateringOnly field to given value.

### HasCateringOnly

`func (o *CopyRevenueTypeMappingListType) HasCateringOnly() bool`

HasCateringOnly returns a boolean if a field has been set.

### GetServiceCharge

`func (o *CopyRevenueTypeMappingListType) GetServiceCharge() float32`

GetServiceCharge returns the ServiceCharge field if non-nil, zero value otherwise.

### GetServiceChargeOk

`func (o *CopyRevenueTypeMappingListType) GetServiceChargeOk() (*float32, bool)`

GetServiceChargeOk returns a tuple with the ServiceCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceCharge

`func (o *CopyRevenueTypeMappingListType) SetServiceCharge(v float32)`

SetServiceCharge sets ServiceCharge field to given value.

### HasServiceCharge

`func (o *CopyRevenueTypeMappingListType) HasServiceCharge() bool`

HasServiceCharge returns a boolean if a field has been set.

### GetServiceChargeTrxCode

`func (o *CopyRevenueTypeMappingListType) GetServiceChargeTrxCode() string`

GetServiceChargeTrxCode returns the ServiceChargeTrxCode field if non-nil, zero value otherwise.

### GetServiceChargeTrxCodeOk

`func (o *CopyRevenueTypeMappingListType) GetServiceChargeTrxCodeOk() (*string, bool)`

GetServiceChargeTrxCodeOk returns a tuple with the ServiceChargeTrxCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceChargeTrxCode

`func (o *CopyRevenueTypeMappingListType) SetServiceChargeTrxCode(v string)`

SetServiceChargeTrxCode sets ServiceChargeTrxCode field to given value.

### HasServiceChargeTrxCode

`func (o *CopyRevenueTypeMappingListType) HasServiceChargeTrxCode() bool`

HasServiceChargeTrxCode returns a boolean if a field has been set.

### GetServiceChargeCalulationMethod

`func (o *CopyRevenueTypeMappingListType) GetServiceChargeCalulationMethod() string`

GetServiceChargeCalulationMethod returns the ServiceChargeCalulationMethod field if non-nil, zero value otherwise.

### GetServiceChargeCalulationMethodOk

`func (o *CopyRevenueTypeMappingListType) GetServiceChargeCalulationMethodOk() (*string, bool)`

GetServiceChargeCalulationMethodOk returns a tuple with the ServiceChargeCalulationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetServiceChargeCalulationMethod

`func (o *CopyRevenueTypeMappingListType) SetServiceChargeCalulationMethod(v string)`

SetServiceChargeCalulationMethod sets ServiceChargeCalulationMethod field to given value.

### HasServiceChargeCalulationMethod

`func (o *CopyRevenueTypeMappingListType) HasServiceChargeCalulationMethod() bool`

HasServiceChargeCalulationMethod returns a boolean if a field has been set.

### GetIsEventType

`func (o *CopyRevenueTypeMappingListType) GetIsEventType() bool`

GetIsEventType returns the IsEventType field if non-nil, zero value otherwise.

### GetIsEventTypeOk

`func (o *CopyRevenueTypeMappingListType) GetIsEventTypeOk() (*bool, bool)`

GetIsEventTypeOk returns a tuple with the IsEventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEventType

`func (o *CopyRevenueTypeMappingListType) SetIsEventType(v bool)`

SetIsEventType sets IsEventType field to given value.

### HasIsEventType

`func (o *CopyRevenueTypeMappingListType) HasIsEventType() bool`

HasIsEventType returns a boolean if a field has been set.

### GetIsSpace

`func (o *CopyRevenueTypeMappingListType) GetIsSpace() bool`

GetIsSpace returns the IsSpace field if non-nil, zero value otherwise.

### GetIsSpaceOk

`func (o *CopyRevenueTypeMappingListType) GetIsSpaceOk() (*bool, bool)`

GetIsSpaceOk returns a tuple with the IsSpace field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSpace

`func (o *CopyRevenueTypeMappingListType) SetIsSpace(v bool)`

SetIsSpace sets IsSpace field to given value.

### HasIsSpace

`func (o *CopyRevenueTypeMappingListType) HasIsSpace() bool`

HasIsSpace returns a boolean if a field has been set.

### GetIsCateringOnly

`func (o *CopyRevenueTypeMappingListType) GetIsCateringOnly() bool`

GetIsCateringOnly returns the IsCateringOnly field if non-nil, zero value otherwise.

### GetIsCateringOnlyOk

`func (o *CopyRevenueTypeMappingListType) GetIsCateringOnlyOk() (*bool, bool)`

GetIsCateringOnlyOk returns a tuple with the IsCateringOnly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCateringOnly

`func (o *CopyRevenueTypeMappingListType) SetIsCateringOnly(v bool)`

SetIsCateringOnly sets IsCateringOnly field to given value.

### HasIsCateringOnly

`func (o *CopyRevenueTypeMappingListType) HasIsCateringOnly() bool`

HasIsCateringOnly returns a boolean if a field has been set.

### GetEventList

`func (o *CopyRevenueTypeMappingListType) GetEventList() []string`

GetEventList returns the EventList field if non-nil, zero value otherwise.

### GetEventListOk

`func (o *CopyRevenueTypeMappingListType) GetEventListOk() (*[]string, bool)`

GetEventListOk returns a tuple with the EventList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventList

`func (o *CopyRevenueTypeMappingListType) SetEventList(v []string)`

SetEventList sets EventList field to given value.

### HasEventList

`func (o *CopyRevenueTypeMappingListType) HasEventList() bool`

HasEventList returns a boolean if a field has been set.

### GetSpaceList

`func (o *CopyRevenueTypeMappingListType) GetSpaceList() []string`

GetSpaceList returns the SpaceList field if non-nil, zero value otherwise.

### GetSpaceListOk

`func (o *CopyRevenueTypeMappingListType) GetSpaceListOk() (*[]string, bool)`

GetSpaceListOk returns a tuple with the SpaceList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSpaceList

`func (o *CopyRevenueTypeMappingListType) SetSpaceList(v []string)`

SetSpaceList sets SpaceList field to given value.

### HasSpaceList

`func (o *CopyRevenueTypeMappingListType) HasSpaceList() bool`

HasSpaceList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


