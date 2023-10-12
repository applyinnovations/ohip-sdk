# BlockTypeExternalAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousingProtected** | Pointer to **bool** | Only available if configured in OPERA Cloud. | [optional] 
**EventType** | Pointer to [**EventTypeType**](EventTypeType.md) |  | [optional] 
**GIId** | Pointer to **string** | Group IATA number validated by an external system and block can&#39;t be saved unless confirmed that GIID is valid. Only available if configured in OPERA Cloud. | [optional] 
**RollEndDate** | Pointer to **bool** | When this flag is set it will be used to roll Block End Date and Block Rate Program End Date in the night audit process. Only available if configured in OPERA Cloud. | [optional] 

## Methods

### NewBlockTypeExternalAttributes

`func NewBlockTypeExternalAttributes() *BlockTypeExternalAttributes`

NewBlockTypeExternalAttributes instantiates a new BlockTypeExternalAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockTypeExternalAttributesWithDefaults

`func NewBlockTypeExternalAttributesWithDefaults() *BlockTypeExternalAttributes`

NewBlockTypeExternalAttributesWithDefaults instantiates a new BlockTypeExternalAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousingProtected

`func (o *BlockTypeExternalAttributes) GetHousingProtected() bool`

GetHousingProtected returns the HousingProtected field if non-nil, zero value otherwise.

### GetHousingProtectedOk

`func (o *BlockTypeExternalAttributes) GetHousingProtectedOk() (*bool, bool)`

GetHousingProtectedOk returns a tuple with the HousingProtected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousingProtected

`func (o *BlockTypeExternalAttributes) SetHousingProtected(v bool)`

SetHousingProtected sets HousingProtected field to given value.

### HasHousingProtected

`func (o *BlockTypeExternalAttributes) HasHousingProtected() bool`

HasHousingProtected returns a boolean if a field has been set.

### GetEventType

`func (o *BlockTypeExternalAttributes) GetEventType() EventTypeType`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *BlockTypeExternalAttributes) GetEventTypeOk() (*EventTypeType, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *BlockTypeExternalAttributes) SetEventType(v EventTypeType)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *BlockTypeExternalAttributes) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetGIId

`func (o *BlockTypeExternalAttributes) GetGIId() string`

GetGIId returns the GIId field if non-nil, zero value otherwise.

### GetGIIdOk

`func (o *BlockTypeExternalAttributes) GetGIIdOk() (*string, bool)`

GetGIIdOk returns a tuple with the GIId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGIId

`func (o *BlockTypeExternalAttributes) SetGIId(v string)`

SetGIId sets GIId field to given value.

### HasGIId

`func (o *BlockTypeExternalAttributes) HasGIId() bool`

HasGIId returns a boolean if a field has been set.

### GetRollEndDate

`func (o *BlockTypeExternalAttributes) GetRollEndDate() bool`

GetRollEndDate returns the RollEndDate field if non-nil, zero value otherwise.

### GetRollEndDateOk

`func (o *BlockTypeExternalAttributes) GetRollEndDateOk() (*bool, bool)`

GetRollEndDateOk returns a tuple with the RollEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRollEndDate

`func (o *BlockTypeExternalAttributes) SetRollEndDate(v bool)`

SetRollEndDate sets RollEndDate field to given value.

### HasRollEndDate

`func (o *BlockTypeExternalAttributes) HasRollEndDate() bool`

HasRollEndDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


