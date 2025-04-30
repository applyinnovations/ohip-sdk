# ReservationConfirmationLetters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ResrvationInfoList** | Pointer to [**[]ReservationConfLettersType**](ReservationConfLettersType.md) | Reservations information and the confirmation letters type attached with them. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationConfirmationLetters

`func NewReservationConfirmationLetters() *ReservationConfirmationLetters`

NewReservationConfirmationLetters instantiates a new ReservationConfirmationLetters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationConfirmationLettersWithDefaults

`func NewReservationConfirmationLettersWithDefaults() *ReservationConfirmationLetters`

NewReservationConfirmationLettersWithDefaults instantiates a new ReservationConfirmationLetters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetResrvationInfoList

`func (o *ReservationConfirmationLetters) GetResrvationInfoList() []ReservationConfLettersType`

GetResrvationInfoList returns the ResrvationInfoList field if non-nil, zero value otherwise.

### GetResrvationInfoListOk

`func (o *ReservationConfirmationLetters) GetResrvationInfoListOk() (*[]ReservationConfLettersType, bool)`

GetResrvationInfoListOk returns a tuple with the ResrvationInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResrvationInfoList

`func (o *ReservationConfirmationLetters) SetResrvationInfoList(v []ReservationConfLettersType)`

SetResrvationInfoList sets ResrvationInfoList field to given value.

### HasResrvationInfoList

`func (o *ReservationConfirmationLetters) HasResrvationInfoList() bool`

HasResrvationInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationConfirmationLetters) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationConfirmationLetters) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationConfirmationLetters) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationConfirmationLetters) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationConfirmationLetters) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationConfirmationLetters) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationConfirmationLetters) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationConfirmationLetters) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


