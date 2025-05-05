# MasterAccountTypeReservationBlock

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**TransactionCode** | Pointer to **[]string** |  | [optional] 

## Methods

### NewMasterAccountTypeReservationBlock

`func NewMasterAccountTypeReservationBlock() *MasterAccountTypeReservationBlock`

NewMasterAccountTypeReservationBlock instantiates a new MasterAccountTypeReservationBlock object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMasterAccountTypeReservationBlockWithDefaults

`func NewMasterAccountTypeReservationBlockWithDefaults() *MasterAccountTypeReservationBlock`

NewMasterAccountTypeReservationBlockWithDefaults instantiates a new MasterAccountTypeReservationBlock object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockIdList

`func (o *MasterAccountTypeReservationBlock) GetBlockIdList() []UniqueIDType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *MasterAccountTypeReservationBlock) GetBlockIdListOk() (*[]UniqueIDType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *MasterAccountTypeReservationBlock) SetBlockIdList(v []UniqueIDType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *MasterAccountTypeReservationBlock) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetTransactionCode

`func (o *MasterAccountTypeReservationBlock) GetTransactionCode() []string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *MasterAccountTypeReservationBlock) GetTransactionCodeOk() (*[]string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *MasterAccountTypeReservationBlock) SetTransactionCode(v []string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *MasterAccountTypeReservationBlock) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


