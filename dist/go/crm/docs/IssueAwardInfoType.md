# IssueAwardInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PointsRequired** | Pointer to **float32** | The number of points that must be redeemed for this award. | [optional] 
**CancelPenaltyPoints** | Pointer to **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | [optional] 
**CancelPenaltyDays** | Pointer to **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | [optional] 
**AwardNumber** | Pointer to **float32** | An identifying number of the award, assigned by the system when the award was issued. | [optional] 
**PackageCode** | Pointer to **string** | Package/Product code for the award. | [optional] 
**StayDate** | Pointer to **string** | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. | [optional] 

## Methods

### NewIssueAwardInfoType

`func NewIssueAwardInfoType() *IssueAwardInfoType`

NewIssueAwardInfoType instantiates a new IssueAwardInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIssueAwardInfoTypeWithDefaults

`func NewIssueAwardInfoTypeWithDefaults() *IssueAwardInfoType`

NewIssueAwardInfoTypeWithDefaults instantiates a new IssueAwardInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPointsRequired

`func (o *IssueAwardInfoType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *IssueAwardInfoType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *IssueAwardInfoType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *IssueAwardInfoType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetCancelPenaltyPoints

`func (o *IssueAwardInfoType) GetCancelPenaltyPoints() float32`

GetCancelPenaltyPoints returns the CancelPenaltyPoints field if non-nil, zero value otherwise.

### GetCancelPenaltyPointsOk

`func (o *IssueAwardInfoType) GetCancelPenaltyPointsOk() (*float32, bool)`

GetCancelPenaltyPointsOk returns a tuple with the CancelPenaltyPoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyPoints

`func (o *IssueAwardInfoType) SetCancelPenaltyPoints(v float32)`

SetCancelPenaltyPoints sets CancelPenaltyPoints field to given value.

### HasCancelPenaltyPoints

`func (o *IssueAwardInfoType) HasCancelPenaltyPoints() bool`

HasCancelPenaltyPoints returns a boolean if a field has been set.

### GetCancelPenaltyDays

`func (o *IssueAwardInfoType) GetCancelPenaltyDays() float32`

GetCancelPenaltyDays returns the CancelPenaltyDays field if non-nil, zero value otherwise.

### GetCancelPenaltyDaysOk

`func (o *IssueAwardInfoType) GetCancelPenaltyDaysOk() (*float32, bool)`

GetCancelPenaltyDaysOk returns a tuple with the CancelPenaltyDays field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCancelPenaltyDays

`func (o *IssueAwardInfoType) SetCancelPenaltyDays(v float32)`

SetCancelPenaltyDays sets CancelPenaltyDays field to given value.

### HasCancelPenaltyDays

`func (o *IssueAwardInfoType) HasCancelPenaltyDays() bool`

HasCancelPenaltyDays returns a boolean if a field has been set.

### GetAwardNumber

`func (o *IssueAwardInfoType) GetAwardNumber() float32`

GetAwardNumber returns the AwardNumber field if non-nil, zero value otherwise.

### GetAwardNumberOk

`func (o *IssueAwardInfoType) GetAwardNumberOk() (*float32, bool)`

GetAwardNumberOk returns a tuple with the AwardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardNumber

`func (o *IssueAwardInfoType) SetAwardNumber(v float32)`

SetAwardNumber sets AwardNumber field to given value.

### HasAwardNumber

`func (o *IssueAwardInfoType) HasAwardNumber() bool`

HasAwardNumber returns a boolean if a field has been set.

### GetPackageCode

`func (o *IssueAwardInfoType) GetPackageCode() string`

GetPackageCode returns the PackageCode field if non-nil, zero value otherwise.

### GetPackageCodeOk

`func (o *IssueAwardInfoType) GetPackageCodeOk() (*string, bool)`

GetPackageCodeOk returns a tuple with the PackageCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPackageCode

`func (o *IssueAwardInfoType) SetPackageCode(v string)`

SetPackageCode sets PackageCode field to given value.

### HasPackageCode

`func (o *IssueAwardInfoType) HasPackageCode() bool`

HasPackageCode returns a boolean if a field has been set.

### GetStayDate

`func (o *IssueAwardInfoType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *IssueAwardInfoType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *IssueAwardInfoType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *IssueAwardInfoType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


