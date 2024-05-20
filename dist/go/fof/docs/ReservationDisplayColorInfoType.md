# ReservationDisplayColorInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ColorDefinition** | Pointer to [**ColorDefinitionType**](ColorDefinitionType.md) |  | [optional] 
**ColorDescription** | Pointer to **string** | Description populated based on DisplayColor. | [optional] 
**DisplayColor** | Pointer to [**ColorType**](ColorType.md) |  | [optional] 

## Methods

### NewReservationDisplayColorInfoType

`func NewReservationDisplayColorInfoType() *ReservationDisplayColorInfoType`

NewReservationDisplayColorInfoType instantiates a new ReservationDisplayColorInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationDisplayColorInfoTypeWithDefaults

`func NewReservationDisplayColorInfoTypeWithDefaults() *ReservationDisplayColorInfoType`

NewReservationDisplayColorInfoTypeWithDefaults instantiates a new ReservationDisplayColorInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetColorDefinition

`func (o *ReservationDisplayColorInfoType) GetColorDefinition() ColorDefinitionType`

GetColorDefinition returns the ColorDefinition field if non-nil, zero value otherwise.

### GetColorDefinitionOk

`func (o *ReservationDisplayColorInfoType) GetColorDefinitionOk() (*ColorDefinitionType, bool)`

GetColorDefinitionOk returns a tuple with the ColorDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColorDefinition

`func (o *ReservationDisplayColorInfoType) SetColorDefinition(v ColorDefinitionType)`

SetColorDefinition sets ColorDefinition field to given value.

### HasColorDefinition

`func (o *ReservationDisplayColorInfoType) HasColorDefinition() bool`

HasColorDefinition returns a boolean if a field has been set.

### GetColorDescription

`func (o *ReservationDisplayColorInfoType) GetColorDescription() string`

GetColorDescription returns the ColorDescription field if non-nil, zero value otherwise.

### GetColorDescriptionOk

`func (o *ReservationDisplayColorInfoType) GetColorDescriptionOk() (*string, bool)`

GetColorDescriptionOk returns a tuple with the ColorDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColorDescription

`func (o *ReservationDisplayColorInfoType) SetColorDescription(v string)`

SetColorDescription sets ColorDescription field to given value.

### HasColorDescription

`func (o *ReservationDisplayColorInfoType) HasColorDescription() bool`

HasColorDescription returns a boolean if a field has been set.

### GetDisplayColor

`func (o *ReservationDisplayColorInfoType) GetDisplayColor() ColorType`

GetDisplayColor returns the DisplayColor field if non-nil, zero value otherwise.

### GetDisplayColorOk

`func (o *ReservationDisplayColorInfoType) GetDisplayColorOk() (*ColorType, bool)`

GetDisplayColorOk returns a tuple with the DisplayColor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayColor

`func (o *ReservationDisplayColorInfoType) SetDisplayColor(v ColorType)`

SetDisplayColor sets DisplayColor field to given value.

### HasDisplayColor

`func (o *ReservationDisplayColorInfoType) HasDisplayColor() bool`

HasDisplayColor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


