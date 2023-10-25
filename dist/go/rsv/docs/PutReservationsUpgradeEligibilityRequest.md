# PutReservationsUpgradeEligibilityRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**UpgradeEligibilityListType** | Pointer to [**[]UpgradeEligibilityType**](UpgradeEligibilityType.md) | List of upgrade Eligibility Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutReservationsUpgradeEligibilityRequest

`func NewPutReservationsUpgradeEligibilityRequest() *PutReservationsUpgradeEligibilityRequest`

NewPutReservationsUpgradeEligibilityRequest instantiates a new PutReservationsUpgradeEligibilityRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutReservationsUpgradeEligibilityRequestWithDefaults

`func NewPutReservationsUpgradeEligibilityRequestWithDefaults() *PutReservationsUpgradeEligibilityRequest`

NewPutReservationsUpgradeEligibilityRequestWithDefaults instantiates a new PutReservationsUpgradeEligibilityRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PutReservationsUpgradeEligibilityRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutReservationsUpgradeEligibilityRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutReservationsUpgradeEligibilityRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutReservationsUpgradeEligibilityRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetUpgradeEligibilityListType

`func (o *PutReservationsUpgradeEligibilityRequest) GetUpgradeEligibilityListType() []UpgradeEligibilityType`

GetUpgradeEligibilityListType returns the UpgradeEligibilityListType field if non-nil, zero value otherwise.

### GetUpgradeEligibilityListTypeOk

`func (o *PutReservationsUpgradeEligibilityRequest) GetUpgradeEligibilityListTypeOk() (*[]UpgradeEligibilityType, bool)`

GetUpgradeEligibilityListTypeOk returns a tuple with the UpgradeEligibilityListType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpgradeEligibilityListType

`func (o *PutReservationsUpgradeEligibilityRequest) SetUpgradeEligibilityListType(v []UpgradeEligibilityType)`

SetUpgradeEligibilityListType sets UpgradeEligibilityListType field to given value.

### HasUpgradeEligibilityListType

`func (o *PutReservationsUpgradeEligibilityRequest) HasUpgradeEligibilityListType() bool`

HasUpgradeEligibilityListType returns a boolean if a field has been set.

### GetWarnings

`func (o *PutReservationsUpgradeEligibilityRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutReservationsUpgradeEligibilityRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutReservationsUpgradeEligibilityRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutReservationsUpgradeEligibilityRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


