# AutoAttachRuleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttachElements** | Pointer to [**AttachElementsType**](AttachElementsType.md) |  | [optional] 
**BasedOn** | Pointer to [**ResvAutoAttchBasedOn**](ResvAutoAttchBasedOn.md) |  | [optional] 
**Code** | Pointer to **string** | The name of the rule. | [optional] 
**HotelId** | Pointer to **string** | The property in which the rule code belongs to. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the rule is active or not. | [optional] 

## Methods

### NewAutoAttachRuleType

`func NewAutoAttachRuleType() *AutoAttachRuleType`

NewAutoAttachRuleType instantiates a new AutoAttachRuleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoAttachRuleTypeWithDefaults

`func NewAutoAttachRuleTypeWithDefaults() *AutoAttachRuleType`

NewAutoAttachRuleTypeWithDefaults instantiates a new AutoAttachRuleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttachElements

`func (o *AutoAttachRuleType) GetAttachElements() AttachElementsType`

GetAttachElements returns the AttachElements field if non-nil, zero value otherwise.

### GetAttachElementsOk

`func (o *AutoAttachRuleType) GetAttachElementsOk() (*AttachElementsType, bool)`

GetAttachElementsOk returns a tuple with the AttachElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachElements

`func (o *AutoAttachRuleType) SetAttachElements(v AttachElementsType)`

SetAttachElements sets AttachElements field to given value.

### HasAttachElements

`func (o *AutoAttachRuleType) HasAttachElements() bool`

HasAttachElements returns a boolean if a field has been set.

### GetBasedOn

`func (o *AutoAttachRuleType) GetBasedOn() ResvAutoAttchBasedOn`

GetBasedOn returns the BasedOn field if non-nil, zero value otherwise.

### GetBasedOnOk

`func (o *AutoAttachRuleType) GetBasedOnOk() (*ResvAutoAttchBasedOn, bool)`

GetBasedOnOk returns a tuple with the BasedOn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBasedOn

`func (o *AutoAttachRuleType) SetBasedOn(v ResvAutoAttchBasedOn)`

SetBasedOn sets BasedOn field to given value.

### HasBasedOn

`func (o *AutoAttachRuleType) HasBasedOn() bool`

HasBasedOn returns a boolean if a field has been set.

### GetCode

`func (o *AutoAttachRuleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AutoAttachRuleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AutoAttachRuleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AutoAttachRuleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetHotelId

`func (o *AutoAttachRuleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AutoAttachRuleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AutoAttachRuleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AutoAttachRuleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *AutoAttachRuleType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *AutoAttachRuleType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *AutoAttachRuleType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *AutoAttachRuleType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


