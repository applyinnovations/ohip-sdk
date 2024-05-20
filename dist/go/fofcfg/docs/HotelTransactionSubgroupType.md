# HotelTransactionSubgroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Transaction Subroup Configuration Code. | [optional] 
**Description** | Pointer to **string** | Description of the Transaction Subgroup. | [optional] 
**GeneratesAvailable** | Pointer to **bool** | Flag to determine whether generates are available or not | [optional] 
**GeneratesSetup** | Pointer to [**GeneratesSetupType**](GeneratesSetupType.md) |  | [optional] 
**Group** | Pointer to **string** | Transaction Group Configuration Code. | [optional] 
**GroupDescription** | Pointer to **string** | Description of the Transaction Group. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where the Transaction Subgroup is configured. | [optional] 
**NewGroup** | Pointer to **string** | Use this attribute to update the existing group during change operation. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Type** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 

## Methods

### NewHotelTransactionSubgroupType

`func NewHotelTransactionSubgroupType() *HotelTransactionSubgroupType`

NewHotelTransactionSubgroupType instantiates a new HotelTransactionSubgroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionSubgroupTypeWithDefaults

`func NewHotelTransactionSubgroupTypeWithDefaults() *HotelTransactionSubgroupType`

NewHotelTransactionSubgroupTypeWithDefaults instantiates a new HotelTransactionSubgroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *HotelTransactionSubgroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelTransactionSubgroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelTransactionSubgroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelTransactionSubgroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *HotelTransactionSubgroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelTransactionSubgroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelTransactionSubgroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelTransactionSubgroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGeneratesAvailable

`func (o *HotelTransactionSubgroupType) GetGeneratesAvailable() bool`

GetGeneratesAvailable returns the GeneratesAvailable field if non-nil, zero value otherwise.

### GetGeneratesAvailableOk

`func (o *HotelTransactionSubgroupType) GetGeneratesAvailableOk() (*bool, bool)`

GetGeneratesAvailableOk returns a tuple with the GeneratesAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesAvailable

`func (o *HotelTransactionSubgroupType) SetGeneratesAvailable(v bool)`

SetGeneratesAvailable sets GeneratesAvailable field to given value.

### HasGeneratesAvailable

`func (o *HotelTransactionSubgroupType) HasGeneratesAvailable() bool`

HasGeneratesAvailable returns a boolean if a field has been set.

### GetGeneratesSetup

`func (o *HotelTransactionSubgroupType) GetGeneratesSetup() GeneratesSetupType`

GetGeneratesSetup returns the GeneratesSetup field if non-nil, zero value otherwise.

### GetGeneratesSetupOk

`func (o *HotelTransactionSubgroupType) GetGeneratesSetupOk() (*GeneratesSetupType, bool)`

GetGeneratesSetupOk returns a tuple with the GeneratesSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesSetup

`func (o *HotelTransactionSubgroupType) SetGeneratesSetup(v GeneratesSetupType)`

SetGeneratesSetup sets GeneratesSetup field to given value.

### HasGeneratesSetup

`func (o *HotelTransactionSubgroupType) HasGeneratesSetup() bool`

HasGeneratesSetup returns a boolean if a field has been set.

### GetGroup

`func (o *HotelTransactionSubgroupType) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *HotelTransactionSubgroupType) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *HotelTransactionSubgroupType) SetGroup(v string)`

SetGroup sets Group field to given value.

### HasGroup

`func (o *HotelTransactionSubgroupType) HasGroup() bool`

HasGroup returns a boolean if a field has been set.

### GetGroupDescription

`func (o *HotelTransactionSubgroupType) GetGroupDescription() string`

GetGroupDescription returns the GroupDescription field if non-nil, zero value otherwise.

### GetGroupDescriptionOk

`func (o *HotelTransactionSubgroupType) GetGroupDescriptionOk() (*string, bool)`

GetGroupDescriptionOk returns a tuple with the GroupDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupDescription

`func (o *HotelTransactionSubgroupType) SetGroupDescription(v string)`

SetGroupDescription sets GroupDescription field to given value.

### HasGroupDescription

`func (o *HotelTransactionSubgroupType) HasGroupDescription() bool`

HasGroupDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelTransactionSubgroupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTransactionSubgroupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTransactionSubgroupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelTransactionSubgroupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetNewGroup

`func (o *HotelTransactionSubgroupType) GetNewGroup() string`

GetNewGroup returns the NewGroup field if non-nil, zero value otherwise.

### GetNewGroupOk

`func (o *HotelTransactionSubgroupType) GetNewGroupOk() (*string, bool)`

GetNewGroupOk returns a tuple with the NewGroup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewGroup

`func (o *HotelTransactionSubgroupType) SetNewGroup(v string)`

SetNewGroup sets NewGroup field to given value.

### HasNewGroup

`func (o *HotelTransactionSubgroupType) HasNewGroup() bool`

HasNewGroup returns a boolean if a field has been set.

### GetSequence

`func (o *HotelTransactionSubgroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HotelTransactionSubgroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HotelTransactionSubgroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HotelTransactionSubgroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetType

`func (o *HotelTransactionSubgroupType) GetType() CashieringTransactionTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HotelTransactionSubgroupType) GetTypeOk() (*CashieringTransactionTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HotelTransactionSubgroupType) SetType(v CashieringTransactionTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *HotelTransactionSubgroupType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


