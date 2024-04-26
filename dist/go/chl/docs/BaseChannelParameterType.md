# BaseChannelParameterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code identifying the parameters related to the Hotel. | [optional] 
**ParameterDescription** | Pointer to **string** | The Description for the parameter. | [optional] 
**ParameterDisplay** | Pointer to **string** | The display name for the parameter in the channel. | [optional] 
**ParameterName** | Pointer to **string** | Name of the parameter in the channel. | [optional] 
**ParameterType** | Pointer to **string** | The type of the parameter, the possible types are P (Parameter), Setting (S). | [optional] 
**ParameterValue** | Pointer to **string** | The Value of the parameter. | [optional] 
**Scope** | Pointer to **string** | Whether this is a global or property level parameter. | [optional] 
**Sequence** | Pointer to **int32** | Sequence number for displaying the parameter in the channel. | [optional] 
**ShortDescription** | Pointer to **string** | Short description for the parameter. | [optional] 
**ValueType** | Pointer to [**ChannelParameterValueType**](ChannelParameterValueType.md) |  | [optional] 

## Methods

### NewBaseChannelParameterType

`func NewBaseChannelParameterType() *BaseChannelParameterType`

NewBaseChannelParameterType instantiates a new BaseChannelParameterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseChannelParameterTypeWithDefaults

`func NewBaseChannelParameterTypeWithDefaults() *BaseChannelParameterType`

NewBaseChannelParameterTypeWithDefaults instantiates a new BaseChannelParameterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *BaseChannelParameterType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BaseChannelParameterType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BaseChannelParameterType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BaseChannelParameterType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetParameterDescription

`func (o *BaseChannelParameterType) GetParameterDescription() string`

GetParameterDescription returns the ParameterDescription field if non-nil, zero value otherwise.

### GetParameterDescriptionOk

`func (o *BaseChannelParameterType) GetParameterDescriptionOk() (*string, bool)`

GetParameterDescriptionOk returns a tuple with the ParameterDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterDescription

`func (o *BaseChannelParameterType) SetParameterDescription(v string)`

SetParameterDescription sets ParameterDescription field to given value.

### HasParameterDescription

`func (o *BaseChannelParameterType) HasParameterDescription() bool`

HasParameterDescription returns a boolean if a field has been set.

### GetParameterDisplay

`func (o *BaseChannelParameterType) GetParameterDisplay() string`

GetParameterDisplay returns the ParameterDisplay field if non-nil, zero value otherwise.

### GetParameterDisplayOk

`func (o *BaseChannelParameterType) GetParameterDisplayOk() (*string, bool)`

GetParameterDisplayOk returns a tuple with the ParameterDisplay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterDisplay

`func (o *BaseChannelParameterType) SetParameterDisplay(v string)`

SetParameterDisplay sets ParameterDisplay field to given value.

### HasParameterDisplay

`func (o *BaseChannelParameterType) HasParameterDisplay() bool`

HasParameterDisplay returns a boolean if a field has been set.

### GetParameterName

`func (o *BaseChannelParameterType) GetParameterName() string`

GetParameterName returns the ParameterName field if non-nil, zero value otherwise.

### GetParameterNameOk

`func (o *BaseChannelParameterType) GetParameterNameOk() (*string, bool)`

GetParameterNameOk returns a tuple with the ParameterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterName

`func (o *BaseChannelParameterType) SetParameterName(v string)`

SetParameterName sets ParameterName field to given value.

### HasParameterName

`func (o *BaseChannelParameterType) HasParameterName() bool`

HasParameterName returns a boolean if a field has been set.

### GetParameterType

`func (o *BaseChannelParameterType) GetParameterType() string`

GetParameterType returns the ParameterType field if non-nil, zero value otherwise.

### GetParameterTypeOk

`func (o *BaseChannelParameterType) GetParameterTypeOk() (*string, bool)`

GetParameterTypeOk returns a tuple with the ParameterType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterType

`func (o *BaseChannelParameterType) SetParameterType(v string)`

SetParameterType sets ParameterType field to given value.

### HasParameterType

`func (o *BaseChannelParameterType) HasParameterType() bool`

HasParameterType returns a boolean if a field has been set.

### GetParameterValue

`func (o *BaseChannelParameterType) GetParameterValue() string`

GetParameterValue returns the ParameterValue field if non-nil, zero value otherwise.

### GetParameterValueOk

`func (o *BaseChannelParameterType) GetParameterValueOk() (*string, bool)`

GetParameterValueOk returns a tuple with the ParameterValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterValue

`func (o *BaseChannelParameterType) SetParameterValue(v string)`

SetParameterValue sets ParameterValue field to given value.

### HasParameterValue

`func (o *BaseChannelParameterType) HasParameterValue() bool`

HasParameterValue returns a boolean if a field has been set.

### GetScope

`func (o *BaseChannelParameterType) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *BaseChannelParameterType) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *BaseChannelParameterType) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *BaseChannelParameterType) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetSequence

`func (o *BaseChannelParameterType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *BaseChannelParameterType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *BaseChannelParameterType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *BaseChannelParameterType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetShortDescription

`func (o *BaseChannelParameterType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *BaseChannelParameterType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *BaseChannelParameterType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *BaseChannelParameterType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetValueType

`func (o *BaseChannelParameterType) GetValueType() ChannelParameterValueType`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *BaseChannelParameterType) GetValueTypeOk() (*ChannelParameterValueType, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *BaseChannelParameterType) SetValueType(v ChannelParameterValueType)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *BaseChannelParameterType) HasValueType() bool`

HasValueType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


