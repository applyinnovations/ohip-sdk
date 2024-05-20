# MoveReasonCodesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MoveReasonCodes** | Pointer to [**[]MoveReasonCodeType**](MoveReasonCodeType.md) | List of Move Reason Codes. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMoveReasonCodesDetails

`func NewMoveReasonCodesDetails() *MoveReasonCodesDetails`

NewMoveReasonCodesDetails instantiates a new MoveReasonCodesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMoveReasonCodesDetailsWithDefaults

`func NewMoveReasonCodesDetailsWithDefaults() *MoveReasonCodesDetails`

NewMoveReasonCodesDetailsWithDefaults instantiates a new MoveReasonCodesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MoveReasonCodesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MoveReasonCodesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MoveReasonCodesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MoveReasonCodesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMoveReasonCodes

`func (o *MoveReasonCodesDetails) GetMoveReasonCodes() []MoveReasonCodeType`

GetMoveReasonCodes returns the MoveReasonCodes field if non-nil, zero value otherwise.

### GetMoveReasonCodesOk

`func (o *MoveReasonCodesDetails) GetMoveReasonCodesOk() (*[]MoveReasonCodeType, bool)`

GetMoveReasonCodesOk returns a tuple with the MoveReasonCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMoveReasonCodes

`func (o *MoveReasonCodesDetails) SetMoveReasonCodes(v []MoveReasonCodeType)`

SetMoveReasonCodes sets MoveReasonCodes field to given value.

### HasMoveReasonCodes

`func (o *MoveReasonCodesDetails) HasMoveReasonCodes() bool`

HasMoveReasonCodes returns a boolean if a field has been set.

### GetWarnings

`func (o *MoveReasonCodesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MoveReasonCodesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MoveReasonCodesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MoveReasonCodesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


