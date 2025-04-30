# TrxCodeAccessRoleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Hotel** | Pointer to [**[]HotelTrxCodesAccessType**](HotelTrxCodesAccessType.md) | Transaction Codes associated with particular Hotel | [optional] 
**Code** | Pointer to **string** | Role code | [optional] 
**LevelCode** | Pointer to **string** | Role level code, for Chain Level code Level code will be Chain Code the role belongs to and for Hotel level role it will b the Hotel Code the role belongs to. | [optional] 
**Level** | Pointer to [**RoleLevelType**](RoleLevelType.md) |  | [optional] 

## Methods

### NewTrxCodeAccessRoleType

`func NewTrxCodeAccessRoleType() *TrxCodeAccessRoleType`

NewTrxCodeAccessRoleType instantiates a new TrxCodeAccessRoleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTrxCodeAccessRoleTypeWithDefaults

`func NewTrxCodeAccessRoleTypeWithDefaults() *TrxCodeAccessRoleType`

NewTrxCodeAccessRoleTypeWithDefaults instantiates a new TrxCodeAccessRoleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotel

`func (o *TrxCodeAccessRoleType) GetHotel() []HotelTrxCodesAccessType`

GetHotel returns the Hotel field if non-nil, zero value otherwise.

### GetHotelOk

`func (o *TrxCodeAccessRoleType) GetHotelOk() (*[]HotelTrxCodesAccessType, bool)`

GetHotelOk returns a tuple with the Hotel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotel

`func (o *TrxCodeAccessRoleType) SetHotel(v []HotelTrxCodesAccessType)`

SetHotel sets Hotel field to given value.

### HasHotel

`func (o *TrxCodeAccessRoleType) HasHotel() bool`

HasHotel returns a boolean if a field has been set.

### GetCode

`func (o *TrxCodeAccessRoleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TrxCodeAccessRoleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TrxCodeAccessRoleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TrxCodeAccessRoleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetLevelCode

`func (o *TrxCodeAccessRoleType) GetLevelCode() string`

GetLevelCode returns the LevelCode field if non-nil, zero value otherwise.

### GetLevelCodeOk

`func (o *TrxCodeAccessRoleType) GetLevelCodeOk() (*string, bool)`

GetLevelCodeOk returns a tuple with the LevelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelCode

`func (o *TrxCodeAccessRoleType) SetLevelCode(v string)`

SetLevelCode sets LevelCode field to given value.

### HasLevelCode

`func (o *TrxCodeAccessRoleType) HasLevelCode() bool`

HasLevelCode returns a boolean if a field has been set.

### GetLevel

`func (o *TrxCodeAccessRoleType) GetLevel() RoleLevelType`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *TrxCodeAccessRoleType) GetLevelOk() (*RoleLevelType, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *TrxCodeAccessRoleType) SetLevel(v RoleLevelType)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *TrxCodeAccessRoleType) HasLevel() bool`

HasLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


