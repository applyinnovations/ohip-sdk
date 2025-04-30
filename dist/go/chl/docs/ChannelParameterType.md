# ChannelParameterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ParameterName** | Pointer to **string** | Name of the parameter in the channel. | [optional] 
**ParameterDisplay** | Pointer to **string** | The display name for the parameter in the channel. | [optional] 
**ShortDescription** | Pointer to **string** | Short description for the parameter. | [optional] 
**ParameterDescription** | Pointer to **string** | The Description for the parameter. | [optional] 
**ParameterValue** | Pointer to **string** | The Value of the parameter. | [optional] 
**HotelId** | Pointer to **string** | Hotel code identifying the parameters related to the Hotel. | [optional] 
**ParameterType** | Pointer to **string** | The type of the parameter, the possible types are P (Parameter), Setting (S). | [optional] 
**Scope** | Pointer to **string** | Whether this is a global or property level parameter. | [optional] 
**ValueType** | Pointer to [**ChannelParameterValueType**](ChannelParameterValueType.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Sequence number for displaying the parameter in the channel. | [optional] 
**Parameters** | Pointer to [**[]BaseChannelParameterType**](BaseChannelParameterType.md) |  | [optional] 
**LevelType** | Pointer to [**ChannelParameterLevelType**](ChannelParameterLevelType.md) |  | [optional] 
**LevelCode** | Pointer to **string** |  | [optional] 

## Methods

### NewChannelParameterType

`func NewChannelParameterType() *ChannelParameterType`

NewChannelParameterType instantiates a new ChannelParameterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelParameterTypeWithDefaults

`func NewChannelParameterTypeWithDefaults() *ChannelParameterType`

NewChannelParameterTypeWithDefaults instantiates a new ChannelParameterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetParameterName

`func (o *ChannelParameterType) GetParameterName() string`

GetParameterName returns the ParameterName field if non-nil, zero value otherwise.

### GetParameterNameOk

`func (o *ChannelParameterType) GetParameterNameOk() (*string, bool)`

GetParameterNameOk returns a tuple with the ParameterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterName

`func (o *ChannelParameterType) SetParameterName(v string)`

SetParameterName sets ParameterName field to given value.

### HasParameterName

`func (o *ChannelParameterType) HasParameterName() bool`

HasParameterName returns a boolean if a field has been set.

### GetParameterDisplay

`func (o *ChannelParameterType) GetParameterDisplay() string`

GetParameterDisplay returns the ParameterDisplay field if non-nil, zero value otherwise.

### GetParameterDisplayOk

`func (o *ChannelParameterType) GetParameterDisplayOk() (*string, bool)`

GetParameterDisplayOk returns a tuple with the ParameterDisplay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterDisplay

`func (o *ChannelParameterType) SetParameterDisplay(v string)`

SetParameterDisplay sets ParameterDisplay field to given value.

### HasParameterDisplay

`func (o *ChannelParameterType) HasParameterDisplay() bool`

HasParameterDisplay returns a boolean if a field has been set.

### GetShortDescription

`func (o *ChannelParameterType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *ChannelParameterType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *ChannelParameterType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *ChannelParameterType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetParameterDescription

`func (o *ChannelParameterType) GetParameterDescription() string`

GetParameterDescription returns the ParameterDescription field if non-nil, zero value otherwise.

### GetParameterDescriptionOk

`func (o *ChannelParameterType) GetParameterDescriptionOk() (*string, bool)`

GetParameterDescriptionOk returns a tuple with the ParameterDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterDescription

`func (o *ChannelParameterType) SetParameterDescription(v string)`

SetParameterDescription sets ParameterDescription field to given value.

### HasParameterDescription

`func (o *ChannelParameterType) HasParameterDescription() bool`

HasParameterDescription returns a boolean if a field has been set.

### GetParameterValue

`func (o *ChannelParameterType) GetParameterValue() string`

GetParameterValue returns the ParameterValue field if non-nil, zero value otherwise.

### GetParameterValueOk

`func (o *ChannelParameterType) GetParameterValueOk() (*string, bool)`

GetParameterValueOk returns a tuple with the ParameterValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterValue

`func (o *ChannelParameterType) SetParameterValue(v string)`

SetParameterValue sets ParameterValue field to given value.

### HasParameterValue

`func (o *ChannelParameterType) HasParameterValue() bool`

HasParameterValue returns a boolean if a field has been set.

### GetHotelId

`func (o *ChannelParameterType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ChannelParameterType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ChannelParameterType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ChannelParameterType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetParameterType

`func (o *ChannelParameterType) GetParameterType() string`

GetParameterType returns the ParameterType field if non-nil, zero value otherwise.

### GetParameterTypeOk

`func (o *ChannelParameterType) GetParameterTypeOk() (*string, bool)`

GetParameterTypeOk returns a tuple with the ParameterType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameterType

`func (o *ChannelParameterType) SetParameterType(v string)`

SetParameterType sets ParameterType field to given value.

### HasParameterType

`func (o *ChannelParameterType) HasParameterType() bool`

HasParameterType returns a boolean if a field has been set.

### GetScope

`func (o *ChannelParameterType) GetScope() string`

GetScope returns the Scope field if non-nil, zero value otherwise.

### GetScopeOk

`func (o *ChannelParameterType) GetScopeOk() (*string, bool)`

GetScopeOk returns a tuple with the Scope field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScope

`func (o *ChannelParameterType) SetScope(v string)`

SetScope sets Scope field to given value.

### HasScope

`func (o *ChannelParameterType) HasScope() bool`

HasScope returns a boolean if a field has been set.

### GetValueType

`func (o *ChannelParameterType) GetValueType() ChannelParameterValueType`

GetValueType returns the ValueType field if non-nil, zero value otherwise.

### GetValueTypeOk

`func (o *ChannelParameterType) GetValueTypeOk() (*ChannelParameterValueType, bool)`

GetValueTypeOk returns a tuple with the ValueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValueType

`func (o *ChannelParameterType) SetValueType(v ChannelParameterValueType)`

SetValueType sets ValueType field to given value.

### HasValueType

`func (o *ChannelParameterType) HasValueType() bool`

HasValueType returns a boolean if a field has been set.

### GetSequence

`func (o *ChannelParameterType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *ChannelParameterType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *ChannelParameterType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *ChannelParameterType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetParameters

`func (o *ChannelParameterType) GetParameters() []BaseChannelParameterType`

GetParameters returns the Parameters field if non-nil, zero value otherwise.

### GetParametersOk

`func (o *ChannelParameterType) GetParametersOk() (*[]BaseChannelParameterType, bool)`

GetParametersOk returns a tuple with the Parameters field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParameters

`func (o *ChannelParameterType) SetParameters(v []BaseChannelParameterType)`

SetParameters sets Parameters field to given value.

### HasParameters

`func (o *ChannelParameterType) HasParameters() bool`

HasParameters returns a boolean if a field has been set.

### GetLevelType

`func (o *ChannelParameterType) GetLevelType() ChannelParameterLevelType`

GetLevelType returns the LevelType field if non-nil, zero value otherwise.

### GetLevelTypeOk

`func (o *ChannelParameterType) GetLevelTypeOk() (*ChannelParameterLevelType, bool)`

GetLevelTypeOk returns a tuple with the LevelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelType

`func (o *ChannelParameterType) SetLevelType(v ChannelParameterLevelType)`

SetLevelType sets LevelType field to given value.

### HasLevelType

`func (o *ChannelParameterType) HasLevelType() bool`

HasLevelType returns a boolean if a field has been set.

### GetLevelCode

`func (o *ChannelParameterType) GetLevelCode() string`

GetLevelCode returns the LevelCode field if non-nil, zero value otherwise.

### GetLevelCodeOk

`func (o *ChannelParameterType) GetLevelCodeOk() (*string, bool)`

GetLevelCodeOk returns a tuple with the LevelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevelCode

`func (o *ChannelParameterType) SetLevelCode(v string)`

SetLevelCode sets LevelCode field to given value.

### HasLevelCode

`func (o *ChannelParameterType) HasLevelCode() bool`

HasLevelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


