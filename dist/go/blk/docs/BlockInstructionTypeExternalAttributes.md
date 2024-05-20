# BlockInstructionTypeExternalAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | Pointer to [**EventTypeType**](EventTypeType.md) |  | [optional] 
**GIId** | Pointer to **string** | Group IATA number validated by an external system and block can&#39;t be saved unless confirmed that GIID is valid. Only available if configured in OPERA Cloud. | [optional] 
**HousingProtected** | Pointer to **bool** | Only available if configured in OPERA Cloud. | [optional] 
**RollEndDate** | Pointer to **bool** | When this flag is set it will be used to roll Block End Date and Block Rate Program End Date in the night audit process. Only available if configured in OPERA Cloud. | [optional] 

## Methods

### NewBlockInstructionTypeExternalAttributes

`func NewBlockInstructionTypeExternalAttributes() *BlockInstructionTypeExternalAttributes`

NewBlockInstructionTypeExternalAttributes instantiates a new BlockInstructionTypeExternalAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInstructionTypeExternalAttributesWithDefaults

`func NewBlockInstructionTypeExternalAttributesWithDefaults() *BlockInstructionTypeExternalAttributes`

NewBlockInstructionTypeExternalAttributesWithDefaults instantiates a new BlockInstructionTypeExternalAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventType

`func (o *BlockInstructionTypeExternalAttributes) GetEventType() EventTypeType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *BlockInstructionTypeExternalAttributes) GetEventTypeOk() (*EventTypeType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *BlockInstructionTypeExternalAttributes) SetEventType(v EventTypeType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *BlockInstructionTypeExternalAttributes) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetGIId

`func (o *BlockInstructionTypeExternalAttributes) GetGIId() string`

GetGIId returns the GIId field if non-nil, zero value otherwise.

### GetGIIdOk

`func (o *BlockInstructionTypeExternalAttributes) GetGIIdOk() (*string, bool)`

GetGIIdOk returns a tuple with the GIId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGIId

`func (o *BlockInstructionTypeExternalAttributes) SetGIId(v string)`

SetGIId sets GIId field to given value.

### HasGIId

`func (o *BlockInstructionTypeExternalAttributes) HasGIId() bool`

HasGIId returns a boolean if a field has been set.

### GetHousingProtected

`func (o *BlockInstructionTypeExternalAttributes) GetHousingProtected() bool`

GetHousingProtected returns the HousingProtected field if non-nil, zero value otherwise.

### GetHousingProtectedOk

`func (o *BlockInstructionTypeExternalAttributes) GetHousingProtectedOk() (*bool, bool)`

GetHousingProtectedOk returns a tuple with the HousingProtected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousingProtected

`func (o *BlockInstructionTypeExternalAttributes) SetHousingProtected(v bool)`

SetHousingProtected sets HousingProtected field to given value.

### HasHousingProtected

`func (o *BlockInstructionTypeExternalAttributes) HasHousingProtected() bool`

HasHousingProtected returns a boolean if a field has been set.

### GetRollEndDate

`func (o *BlockInstructionTypeExternalAttributes) GetRollEndDate() bool`

GetRollEndDate returns the RollEndDate field if non-nil, zero value otherwise.

### GetRollEndDateOk

`func (o *BlockInstructionTypeExternalAttributes) GetRollEndDateOk() (*bool, bool)`

GetRollEndDateOk returns a tuple with the RollEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRollEndDate

`func (o *BlockInstructionTypeExternalAttributes) SetRollEndDate(v bool)`

SetRollEndDate sets RollEndDate field to given value.

### HasRollEndDate

`func (o *BlockInstructionTypeExternalAttributes) HasRollEndDate() bool`

HasRollEndDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


