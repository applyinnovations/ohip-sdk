# FunctionSpaceConfigTypeSetupStylesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CodeId** | Pointer to **float32** | Setup style code id . | [optional] 
**Code** | Pointer to **string** | Function Space Setup Style Code. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**DisplaySequence** | Pointer to **int32** | Description of the Function Space Setup Style. | [optional] 
**Directory** | Pointer to **bool** | Display in Directory True or False. | [optional] 
**WebBooking** | Pointer to **bool** | Bookmarkable via Website True or False. | [optional] 
**WebSetup** | Pointer to **int32** | Setup Time for web bookings. | [optional] 
**WebSetdown** | Pointer to **int32** | Setdown Time for web bookings. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if the Setup Style is active. | [optional] 
**MinCapacity** | Pointer to **int32** | Minimum Capacity for function space setup style type. | [optional] 
**MaxCapacity** | Pointer to **int32** | Maximum Capacity for function space setup style type. | [optional] 
**Default** | Pointer to **bool** | Indicate if the setup style is the default. | [optional] 

## Methods

### NewFunctionSpaceConfigTypeSetupStylesInner

`func NewFunctionSpaceConfigTypeSetupStylesInner() *FunctionSpaceConfigTypeSetupStylesInner`

NewFunctionSpaceConfigTypeSetupStylesInner instantiates a new FunctionSpaceConfigTypeSetupStylesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceConfigTypeSetupStylesInnerWithDefaults

`func NewFunctionSpaceConfigTypeSetupStylesInnerWithDefaults() *FunctionSpaceConfigTypeSetupStylesInner`

NewFunctionSpaceConfigTypeSetupStylesInnerWithDefaults instantiates a new FunctionSpaceConfigTypeSetupStylesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodeId

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetCodeId() float32`

GetCodeId returns the CodeId field if non-nil, zero value otherwise.

### GetCodeIdOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetCodeIdOk() (*float32, bool)`

GetCodeIdOk returns a tuple with the CodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeId

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetCodeId(v float32)`

SetCodeId sets CodeId field to given value.

### HasCodeId

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasCodeId() bool`

HasCodeId returns a boolean if a field has been set.

### GetCode

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetDisplaySequence() int32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetDisplaySequenceOk() (*int32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetDisplaySequence(v int32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetDirectory

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetDirectory() bool`

GetDirectory returns the Directory field if non-nil, zero value otherwise.

### GetDirectoryOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetDirectoryOk() (*bool, bool)`

GetDirectoryOk returns a tuple with the Directory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectory

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetDirectory(v bool)`

SetDirectory sets Directory field to given value.

### HasDirectory

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasDirectory() bool`

HasDirectory returns a boolean if a field has been set.

### GetWebBooking

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetWebBooking() bool`

GetWebBooking returns the WebBooking field if non-nil, zero value otherwise.

### GetWebBookingOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetWebBookingOk() (*bool, bool)`

GetWebBookingOk returns a tuple with the WebBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBooking

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetWebBooking(v bool)`

SetWebBooking sets WebBooking field to given value.

### HasWebBooking

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasWebBooking() bool`

HasWebBooking returns a boolean if a field has been set.

### GetWebSetup

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetWebSetup() int32`

GetWebSetup returns the WebSetup field if non-nil, zero value otherwise.

### GetWebSetupOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetWebSetupOk() (*int32, bool)`

GetWebSetupOk returns a tuple with the WebSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebSetup

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetWebSetup(v int32)`

SetWebSetup sets WebSetup field to given value.

### HasWebSetup

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasWebSetup() bool`

HasWebSetup returns a boolean if a field has been set.

### GetWebSetdown

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetWebSetdown() int32`

GetWebSetdown returns the WebSetdown field if non-nil, zero value otherwise.

### GetWebSetdownOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetWebSetdownOk() (*int32, bool)`

GetWebSetdownOk returns a tuple with the WebSetdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebSetdown

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetWebSetdown(v int32)`

SetWebSetdown sets WebSetdown field to given value.

### HasWebSetdown

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasWebSetdown() bool`

HasWebSetdown returns a boolean if a field has been set.

### GetInactive

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMinCapacity

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetMinCapacity() int32`

GetMinCapacity returns the MinCapacity field if non-nil, zero value otherwise.

### GetMinCapacityOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetMinCapacityOk() (*int32, bool)`

GetMinCapacityOk returns a tuple with the MinCapacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinCapacity

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetMinCapacity(v int32)`

SetMinCapacity sets MinCapacity field to given value.

### HasMinCapacity

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasMinCapacity() bool`

HasMinCapacity returns a boolean if a field has been set.

### GetMaxCapacity

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetMaxCapacity() int32`

GetMaxCapacity returns the MaxCapacity field if non-nil, zero value otherwise.

### GetMaxCapacityOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetMaxCapacityOk() (*int32, bool)`

GetMaxCapacityOk returns a tuple with the MaxCapacity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxCapacity

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetMaxCapacity(v int32)`

SetMaxCapacity sets MaxCapacity field to given value.

### HasMaxCapacity

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasMaxCapacity() bool`

HasMaxCapacity returns a boolean if a field has been set.

### GetDefault

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *FunctionSpaceConfigTypeSetupStylesInner) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *FunctionSpaceConfigTypeSetupStylesInner) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *FunctionSpaceConfigTypeSetupStylesInner) HasDefault() bool`

HasDefault returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


