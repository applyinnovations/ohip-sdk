# FunctionSpaceSetupStyleType

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

## Methods

### NewFunctionSpaceSetupStyleType

`func NewFunctionSpaceSetupStyleType() *FunctionSpaceSetupStyleType`

NewFunctionSpaceSetupStyleType instantiates a new FunctionSpaceSetupStyleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceSetupStyleTypeWithDefaults

`func NewFunctionSpaceSetupStyleTypeWithDefaults() *FunctionSpaceSetupStyleType`

NewFunctionSpaceSetupStyleTypeWithDefaults instantiates a new FunctionSpaceSetupStyleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodeId

`func (o *FunctionSpaceSetupStyleType) GetCodeId() float32`

GetCodeId returns the CodeId field if non-nil, zero value otherwise.

### GetCodeIdOk

`func (o *FunctionSpaceSetupStyleType) GetCodeIdOk() (*float32, bool)`

GetCodeIdOk returns a tuple with the CodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeId

`func (o *FunctionSpaceSetupStyleType) SetCodeId(v float32)`

SetCodeId sets CodeId field to given value.

### HasCodeId

`func (o *FunctionSpaceSetupStyleType) HasCodeId() bool`

HasCodeId returns a boolean if a field has been set.

### GetCode

`func (o *FunctionSpaceSetupStyleType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FunctionSpaceSetupStyleType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FunctionSpaceSetupStyleType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FunctionSpaceSetupStyleType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *FunctionSpaceSetupStyleType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *FunctionSpaceSetupStyleType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *FunctionSpaceSetupStyleType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *FunctionSpaceSetupStyleType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *FunctionSpaceSetupStyleType) GetDisplaySequence() int32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *FunctionSpaceSetupStyleType) GetDisplaySequenceOk() (*int32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *FunctionSpaceSetupStyleType) SetDisplaySequence(v int32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *FunctionSpaceSetupStyleType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetDirectory

`func (o *FunctionSpaceSetupStyleType) GetDirectory() bool`

GetDirectory returns the Directory field if non-nil, zero value otherwise.

### GetDirectoryOk

`func (o *FunctionSpaceSetupStyleType) GetDirectoryOk() (*bool, bool)`

GetDirectoryOk returns a tuple with the Directory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectory

`func (o *FunctionSpaceSetupStyleType) SetDirectory(v bool)`

SetDirectory sets Directory field to given value.

### HasDirectory

`func (o *FunctionSpaceSetupStyleType) HasDirectory() bool`

HasDirectory returns a boolean if a field has been set.

### GetWebBooking

`func (o *FunctionSpaceSetupStyleType) GetWebBooking() bool`

GetWebBooking returns the WebBooking field if non-nil, zero value otherwise.

### GetWebBookingOk

`func (o *FunctionSpaceSetupStyleType) GetWebBookingOk() (*bool, bool)`

GetWebBookingOk returns a tuple with the WebBooking field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBooking

`func (o *FunctionSpaceSetupStyleType) SetWebBooking(v bool)`

SetWebBooking sets WebBooking field to given value.

### HasWebBooking

`func (o *FunctionSpaceSetupStyleType) HasWebBooking() bool`

HasWebBooking returns a boolean if a field has been set.

### GetWebSetup

`func (o *FunctionSpaceSetupStyleType) GetWebSetup() int32`

GetWebSetup returns the WebSetup field if non-nil, zero value otherwise.

### GetWebSetupOk

`func (o *FunctionSpaceSetupStyleType) GetWebSetupOk() (*int32, bool)`

GetWebSetupOk returns a tuple with the WebSetup field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebSetup

`func (o *FunctionSpaceSetupStyleType) SetWebSetup(v int32)`

SetWebSetup sets WebSetup field to given value.

### HasWebSetup

`func (o *FunctionSpaceSetupStyleType) HasWebSetup() bool`

HasWebSetup returns a boolean if a field has been set.

### GetWebSetdown

`func (o *FunctionSpaceSetupStyleType) GetWebSetdown() int32`

GetWebSetdown returns the WebSetdown field if non-nil, zero value otherwise.

### GetWebSetdownOk

`func (o *FunctionSpaceSetupStyleType) GetWebSetdownOk() (*int32, bool)`

GetWebSetdownOk returns a tuple with the WebSetdown field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebSetdown

`func (o *FunctionSpaceSetupStyleType) SetWebSetdown(v int32)`

SetWebSetdown sets WebSetdown field to given value.

### HasWebSetdown

`func (o *FunctionSpaceSetupStyleType) HasWebSetdown() bool`

HasWebSetdown returns a boolean if a field has been set.

### GetInactive

`func (o *FunctionSpaceSetupStyleType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *FunctionSpaceSetupStyleType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *FunctionSpaceSetupStyleType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *FunctionSpaceSetupStyleType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


