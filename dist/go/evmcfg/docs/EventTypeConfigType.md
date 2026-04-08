# EventTypeConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventTypeCode** | Pointer to **string** | Code Field Value belongs to the Event Type. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Description** | Pointer to **string** | Description to elaborate the Event Code Type. | [optional] 
**TimeWindow** | Pointer to [**TimeWindowType**](TimeWindowType.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Determines the event type status as active or inactive | [optional] 
**MealType** | Pointer to **string** | Meal type associated with the event type. | [optional] 
**Coverable** | Pointer to **bool** | Indicates if Event Type is coverable or not. | [optional] 
**WebBookable** | Pointer to **bool** | Defines if web booking is allowed or not. | [optional] 
**Sequence** | Pointer to **int32** | The sequence number of the event. | [optional] 

## Methods

### NewEventTypeConfigType

`func NewEventTypeConfigType() *EventTypeConfigType`

NewEventTypeConfigType instantiates a new EventTypeConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventTypeConfigTypeWithDefaults

`func NewEventTypeConfigTypeWithDefaults() *EventTypeConfigType`

NewEventTypeConfigTypeWithDefaults instantiates a new EventTypeConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventTypeCode

`func (o *EventTypeConfigType) GetEventTypeCode() string`

GetEventTypeCode returns the EventTypeCode field if non-nil, zero value otherwise.

### GetEventTypeCodeOk

`func (o *EventTypeConfigType) GetEventTypeCodeOk() (*string, bool)`

GetEventTypeCodeOk returns a tuple with the EventTypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventTypeCode

`func (o *EventTypeConfigType) SetEventTypeCode(v string)`

SetEventTypeCode sets EventTypeCode field to given value.

### HasEventTypeCode

`func (o *EventTypeConfigType) HasEventTypeCode() bool`

HasEventTypeCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *EventTypeConfigType) GetTranslatableDescription() TranslationTextType50`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *EventTypeConfigType) GetTranslatableDescriptionOk() (*TranslationTextType50, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *EventTypeConfigType) SetTranslatableDescription(v TranslationTextType50)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *EventTypeConfigType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetDescription

`func (o *EventTypeConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EventTypeConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EventTypeConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EventTypeConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTimeWindow

`func (o *EventTypeConfigType) GetTimeWindow() TimeWindowType`

GetTimeWindow returns the TimeWindow field if non-nil, zero value otherwise.

### GetTimeWindowOk

`func (o *EventTypeConfigType) GetTimeWindowOk() (*TimeWindowType, bool)`

GetTimeWindowOk returns a tuple with the TimeWindow field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeWindow

`func (o *EventTypeConfigType) SetTimeWindow(v TimeWindowType)`

SetTimeWindow sets TimeWindow field to given value.

### HasTimeWindow

`func (o *EventTypeConfigType) HasTimeWindow() bool`

HasTimeWindow returns a boolean if a field has been set.

### GetInactive

`func (o *EventTypeConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *EventTypeConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *EventTypeConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *EventTypeConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMealType

`func (o *EventTypeConfigType) GetMealType() string`

GetMealType returns the MealType field if non-nil, zero value otherwise.

### GetMealTypeOk

`func (o *EventTypeConfigType) GetMealTypeOk() (*string, bool)`

GetMealTypeOk returns a tuple with the MealType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMealType

`func (o *EventTypeConfigType) SetMealType(v string)`

SetMealType sets MealType field to given value.

### HasMealType

`func (o *EventTypeConfigType) HasMealType() bool`

HasMealType returns a boolean if a field has been set.

### GetCoverable

`func (o *EventTypeConfigType) GetCoverable() bool`

GetCoverable returns the Coverable field if non-nil, zero value otherwise.

### GetCoverableOk

`func (o *EventTypeConfigType) GetCoverableOk() (*bool, bool)`

GetCoverableOk returns a tuple with the Coverable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCoverable

`func (o *EventTypeConfigType) SetCoverable(v bool)`

SetCoverable sets Coverable field to given value.

### HasCoverable

`func (o *EventTypeConfigType) HasCoverable() bool`

HasCoverable returns a boolean if a field has been set.

### GetWebBookable

`func (o *EventTypeConfigType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *EventTypeConfigType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *EventTypeConfigType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *EventTypeConfigType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.

### GetSequence

`func (o *EventTypeConfigType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *EventTypeConfigType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *EventTypeConfigType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *EventTypeConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


