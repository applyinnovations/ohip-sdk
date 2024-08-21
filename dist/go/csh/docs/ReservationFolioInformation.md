# ReservationFolioInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ReservationFolioInformation** | Pointer to [**ReservationFolioInfoType**](ReservationFolioInfoType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationFolioInformation

`func NewReservationFolioInformation() *ReservationFolioInformation`

NewReservationFolioInformation instantiates a new ReservationFolioInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationFolioInformationWithDefaults

`func NewReservationFolioInformationWithDefaults() *ReservationFolioInformation`

NewReservationFolioInformationWithDefaults instantiates a new ReservationFolioInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ReservationFolioInformation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationFolioInformation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationFolioInformation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationFolioInformation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationFolioInformation

`func (o *ReservationFolioInformation) GetReservationFolioInformation() ReservationFolioInfoType`

GetReservationFolioInformation returns the ReservationFolioInformation field if non-nil, zero value otherwise.

### GetReservationFolioInformationOk

`func (o *ReservationFolioInformation) GetReservationFolioInformationOk() (*ReservationFolioInfoType, bool)`

GetReservationFolioInformationOk returns a tuple with the ReservationFolioInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationFolioInformation

`func (o *ReservationFolioInformation) SetReservationFolioInformation(v ReservationFolioInfoType)`

SetReservationFolioInformation sets ReservationFolioInformation field to given value.

### HasReservationFolioInformation

`func (o *ReservationFolioInformation) HasReservationFolioInformation() bool`

HasReservationFolioInformation returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationFolioInformation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationFolioInformation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationFolioInformation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationFolioInformation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


