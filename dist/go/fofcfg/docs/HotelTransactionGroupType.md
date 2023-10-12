# HotelTransactionGroupType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the Transaction Group. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Transaction Group Configuration Code. | [optional] 
**Type** | Pointer to [**CashieringTransactionTypeType**](CashieringTransactionTypeType.md) |  | [optional] 
**GeneratesSetup** | Pointer to [**GeneratesSetupType**](GeneratesSetupType.md) |  | [optional] 
**GeneratesAvailable** | Pointer to **bool** | Flag to determine whether generates are available or not | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where the Transaction Group is configured. | [optional] 

## Methods

### NewHotelTransactionGroupType

`func NewHotelTransactionGroupType() *HotelTransactionGroupType`

NewHotelTransactionGroupType instantiates a new HotelTransactionGroupType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransactionGroupTypeWithDefaults

`func NewHotelTransactionGroupTypeWithDefaults() *HotelTransactionGroupType`

NewHotelTransactionGroupTypeWithDefaults instantiates a new HotelTransactionGroupType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *HotelTransactionGroupType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelTransactionGroupType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelTransactionGroupType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelTransactionGroupType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *HotelTransactionGroupType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HotelTransactionGroupType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HotelTransactionGroupType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HotelTransactionGroupType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *HotelTransactionGroupType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelTransactionGroupType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelTransactionGroupType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelTransactionGroupType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetType

`func (o *HotelTransactionGroupType) GetType() CashieringTransactionTypeType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *HotelTransactionGroupType) GetTypeOk() (*CashieringTransactionTypeType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *HotelTransactionGroupType) SetType(v CashieringTransactionTypeType)`

SetType sets Type field to given value.

### HasType

`func (o *HotelTransactionGroupType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetGeneratesSetup

`func (o *HotelTransactionGroupType) GetGeneratesSetup() GeneratesSetupType`

GetGeneratesSetup returns the GeneratesSetup field if non-nil, zero value otherwise.

### GetGeneratesSetupOk

`func (o *HotelTransactionGroupType) GetGeneratesSetupOk() (*GeneratesSetupType, bool)`

GetGeneratesSetupOk returns a tuple with the GeneratesSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesSetup

`func (o *HotelTransactionGroupType) SetGeneratesSetup(v GeneratesSetupType)`

SetGeneratesSetup sets GeneratesSetup field to given value.

### HasGeneratesSetup

`func (o *HotelTransactionGroupType) HasGeneratesSetup() bool`

HasGeneratesSetup returns a boolean if a field has been set.

### GetGeneratesAvailable

`func (o *HotelTransactionGroupType) GetGeneratesAvailable() bool`

GetGeneratesAvailable returns the GeneratesAvailable field if non-nil, zero value otherwise.

### GetGeneratesAvailableOk

`func (o *HotelTransactionGroupType) GetGeneratesAvailableOk() (*bool, bool)`

GetGeneratesAvailableOk returns a tuple with the GeneratesAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneratesAvailable

`func (o *HotelTransactionGroupType) SetGeneratesAvailable(v bool)`

SetGeneratesAvailable sets GeneratesAvailable field to given value.

### HasGeneratesAvailable

`func (o *HotelTransactionGroupType) HasGeneratesAvailable() bool`

HasGeneratesAvailable returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelTransactionGroupType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelTransactionGroupType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelTransactionGroupType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelTransactionGroupType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


