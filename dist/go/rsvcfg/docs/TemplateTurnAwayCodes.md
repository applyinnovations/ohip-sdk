# TemplateTurnAwayCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TurnAwayCodes** | Pointer to [**[]TemplateTurnAwayCodeType**](TemplateTurnAwayCodeType.md) | Collection of template turnaway codes | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateTurnAwayCodes

`func NewTemplateTurnAwayCodes() *TemplateTurnAwayCodes`

NewTemplateTurnAwayCodes instantiates a new TemplateTurnAwayCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateTurnAwayCodesWithDefaults

`func NewTemplateTurnAwayCodesWithDefaults() *TemplateTurnAwayCodes`

NewTemplateTurnAwayCodesWithDefaults instantiates a new TemplateTurnAwayCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *TemplateTurnAwayCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateTurnAwayCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateTurnAwayCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateTurnAwayCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTurnAwayCodes

`func (o *TemplateTurnAwayCodes) GetTurnAwayCodes() []TemplateTurnAwayCodeType`

GetTurnAwayCodes returns the TurnAwayCodes field if non-nil, zero value otherwise.

### GetTurnAwayCodesOk

`func (o *TemplateTurnAwayCodes) GetTurnAwayCodesOk() (*[]TemplateTurnAwayCodeType, bool)`

GetTurnAwayCodesOk returns a tuple with the TurnAwayCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurnAwayCodes

`func (o *TemplateTurnAwayCodes) SetTurnAwayCodes(v []TemplateTurnAwayCodeType)`

SetTurnAwayCodes sets TurnAwayCodes field to given value.

### HasTurnAwayCodes

`func (o *TemplateTurnAwayCodes) HasTurnAwayCodes() bool`

HasTurnAwayCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateTurnAwayCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateTurnAwayCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateTurnAwayCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateTurnAwayCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


