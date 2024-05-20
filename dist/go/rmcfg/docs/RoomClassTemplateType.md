# RoomClassTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 

## Methods

### NewRoomClassTemplateType

`func NewRoomClassTemplateType() *RoomClassTemplateType`

NewRoomClassTemplateType instantiates a new RoomClassTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassTemplateTypeWithDefaults

`func NewRoomClassTemplateTypeWithDefaults() *RoomClassTemplateType`

NewRoomClassTemplateTypeWithDefaults instantiates a new RoomClassTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RoomClassTemplateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RoomClassTemplateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RoomClassTemplateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RoomClassTemplateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RoomClassTemplateType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomClassTemplateType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomClassTemplateType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomClassTemplateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetInactive

`func (o *RoomClassTemplateType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomClassTemplateType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomClassTemplateType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomClassTemplateType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetSequence

`func (o *RoomClassTemplateType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *RoomClassTemplateType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *RoomClassTemplateType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *RoomClassTemplateType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


