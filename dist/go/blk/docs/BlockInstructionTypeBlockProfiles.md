# BlockInstructionTypeBlockProfiles

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlockProfile** | Pointer to [**[]BlockProfilesType**](BlockProfilesType.md) | The list of profiles associated with the block. | [optional] 
**FullOverlay** | Pointer to **bool** | Indicates whether to perform a full overlay for the profiles. Currently only the Fulloverlay functionality is provided. | [optional] 

## Methods

### NewBlockInstructionTypeBlockProfiles

`func NewBlockInstructionTypeBlockProfiles() *BlockInstructionTypeBlockProfiles`

NewBlockInstructionTypeBlockProfiles instantiates a new BlockInstructionTypeBlockProfiles object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockInstructionTypeBlockProfilesWithDefaults

`func NewBlockInstructionTypeBlockProfilesWithDefaults() *BlockInstructionTypeBlockProfiles`

NewBlockInstructionTypeBlockProfilesWithDefaults instantiates a new BlockInstructionTypeBlockProfiles object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBlockProfile

`func (o *BlockInstructionTypeBlockProfiles) GetBlockProfile() []BlockProfilesType`

GetBlockProfile returns the BlockProfile field if non-nil, zero value otherwise.

### GetBlockProfileOk

`func (o *BlockInstructionTypeBlockProfiles) GetBlockProfileOk() (*[]BlockProfilesType, bool)`

GetBlockProfileOk returns a tuple with the BlockProfile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockProfile

`func (o *BlockInstructionTypeBlockProfiles) SetBlockProfile(v []BlockProfilesType)`

SetBlockProfile sets BlockProfile field to given value.

### HasBlockProfile

`func (o *BlockInstructionTypeBlockProfiles) HasBlockProfile() bool`

HasBlockProfile returns a boolean if a field has been set.

### GetFullOverlay

`func (o *BlockInstructionTypeBlockProfiles) GetFullOverlay() bool`

GetFullOverlay returns the FullOverlay field if non-nil, zero value otherwise.

### GetFullOverlayOk

`func (o *BlockInstructionTypeBlockProfiles) GetFullOverlayOk() (*bool, bool)`

GetFullOverlayOk returns a tuple with the FullOverlay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullOverlay

`func (o *BlockInstructionTypeBlockProfiles) SetFullOverlay(v bool)`

SetFullOverlay sets FullOverlay field to given value.

### HasFullOverlay

`func (o *BlockInstructionTypeBlockProfiles) HasFullOverlay() bool`

HasFullOverlay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

