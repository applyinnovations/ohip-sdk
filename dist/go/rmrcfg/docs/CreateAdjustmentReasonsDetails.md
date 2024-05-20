# CreateAdjustmentReasonsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentReasons** | Pointer to [**[]RoomRotationAdjustmentReasonType**](RoomRotationAdjustmentReasonType.md) | Room Rotation Adjustment Reason Enumeration element. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateAdjustmentReasonsDetails

`func NewCreateAdjustmentReasonsDetails() *CreateAdjustmentReasonsDetails`

NewCreateAdjustmentReasonsDetails instantiates a new CreateAdjustmentReasonsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAdjustmentReasonsDetailsWithDefaults

`func NewCreateAdjustmentReasonsDetailsWithDefaults() *CreateAdjustmentReasonsDetails`

NewCreateAdjustmentReasonsDetailsWithDefaults instantiates a new CreateAdjustmentReasonsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentReasons

`func (o *CreateAdjustmentReasonsDetails) GetAdjustmentReasons() []RoomRotationAdjustmentReasonType`

GetAdjustmentReasons returns the AdjustmentReasons field if non-nil, zero value otherwise.

### GetAdjustmentReasonsOk

`func (o *CreateAdjustmentReasonsDetails) GetAdjustmentReasonsOk() (*[]RoomRotationAdjustmentReasonType, bool)`

GetAdjustmentReasonsOk returns a tuple with the AdjustmentReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentReasons

`func (o *CreateAdjustmentReasonsDetails) SetAdjustmentReasons(v []RoomRotationAdjustmentReasonType)`

SetAdjustmentReasons sets AdjustmentReasons field to given value.

### HasAdjustmentReasons

`func (o *CreateAdjustmentReasonsDetails) HasAdjustmentReasons() bool`

HasAdjustmentReasons returns a boolean if a field has been set.

### GetLinks

`func (o *CreateAdjustmentReasonsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateAdjustmentReasonsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateAdjustmentReasonsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateAdjustmentReasonsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateAdjustmentReasonsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateAdjustmentReasonsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateAdjustmentReasonsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateAdjustmentReasonsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


